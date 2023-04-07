---
title: x264源码分析
date: 2023-02-29
article: false
---

```c
case X264_ME_UMH:
    {
        /* Uneven-cross Multi-Hexagon-grid Search
         * as in JM, except with different early termination */
        
        x264_log(h, X264_LOG_INFO, "X264_ME_UMH start\n");
        //表示不同的像素块大小对应的右移位数
        static const uint8_t pixel_size_shift[7] = {0, 1, 1, 2, 3, 3, 4};

        int ucost1, ucost2;
        int cross_start = 1;

        /* refine predictors */
        ucost1 = bcost;
        
        //该函数实现了以 (pmx, pmy) 为起点沿着对角线方向迭代搜索相邻像素点的过程。如果搜索到的相邻像素点中有非零点，则执行 DIA1_ITER(0, 0) 函数，再以 (0, 0) 为起点重新搜索
        DIA1_ITER(pmx, pmy);
        if (pmx | pmy)
            DIA1_ITER(0, 0);

        if (i_pixel == PIXEL_4x4)
            goto me_hex2;
        ucost2 = bcost;
        if ((bmx | bmy) && ((bmx - pmx) | (bmy - pmy)))
            DIA1_ITER(bmx, bmy);
        if (bcost == ucost2)
            cross_start = 3;
        omx = bmx;
        omy = bmy;
```



pmx 和 pmy 分别表示当前块的左上角像素点在参考帧中的运动矢量（也称为运动预测值），即当前块在参考帧中对应的位置与前一帧图像中相同位置的像素点的位移量。这里的参考帧通常是前一帧或者前几帧图像。

bmx 和 bmy 则表示当前块在参考帧中的最佳匹配位置的运动矢量，即搜索到的最优位移量。

omx 和 omy 表示当前块在参考帧中的最终运动矢量，即编码器最终选择的运动矢量，用来表示当前块相对于参考帧的位置。

::: details COST_MV_X4

```c
#define COST_MV_X4(m0x, m0y, m1x, m1y, m2x, m2y, m3x, m3y)                \
    {                                                                     \
        pixel *pix_base = p_fref_w + omx + omy * stride;                  \
        h->pixf.fpelcmp_x4[i_pixel](p_fenc,                               \
                                    pix_base + (m0x) + (m0y)*stride,      \
                                    pix_base + (m1x) + (m1y)*stride,      \
                                    pix_base + (m2x) + (m2y)*stride,      \
                                    pix_base + (m3x) + (m3y)*stride,      \
                                    stride, costs);                       \
        costs[0] += BITS_MVD(omx + (m0x), omy + (m0y));                   \
        costs[1] += BITS_MVD(omx + (m1x), omy + (m1y));                   \
        costs[2] += BITS_MVD(omx + (m2x), omy + (m2y));                   \
        costs[3] += BITS_MVD(omx + (m3x), omy + (m3y));                   \
        COPY3_IF_LT(bcost, costs[0], bmx, omx + (m0x), bmy, omy + (m0y)); \
        COPY3_IF_LT(bcost, costs[1], bmx, omx + (m1x), bmy, omy + (m1y)); \
        COPY3_IF_LT(bcost, costs[2], bmx, omx + (m2x), bmy, omy + (m2y)); \
        COPY3_IF_LT(bcost, costs[3], bmx, omx + (m3x), bmy, omy + (m3y)); \
    }
```

这段代码定义了一个宏，它接受8个参数，表示参考图像像素坐标的偏移量。该宏调用了一个名为`h->pixf.fpelcmp_x4[i_pixel]`的函数，并传递了5个参数：一个指向编码帧图像数据的指针`p_fenc`，以及4个指向参考图像像素数据的指针，这些指针是根据传递的偏移量计算得出的。

此外，该宏还计算了4个MVD（运动矢量差分）的比特数，将它们添加到一个名为`costs`的数组中。然后，该宏将这些比特数添加到一个名为`bcost`的变量中，并将其与之前的最小比特数进行比较。如果当前的比特数更小，则将其值更新为新的最小比特数，并将与之相关的偏移量保存在变量`bmx`和`bmy`中。

这段代码的作用是用于计算4个不同的运动矢量偏移量对应的比特数和代价，并找到其中的最小值和最小值对应的偏移量

:::

```c
        /* early termination */
#define SAD_THRESH(v) (bcost < (v >> pixel_size_shift[i_pixel]))
        if (bcost == ucost2 && SAD_THRESH(2000))
        {
            //计算运动矢量的代价
            COST_MV_X4(0, -2, -1, -1, 1, -1, -2, 0);
            COST_MV_X4(2, 0, -1, 1, 1, 1, 0, 2);
            if (bcost == ucost1 && SAD_THRESH(500))
                break;
            if (bcost == ucost2)
            {
                int range = (i_me_range >> 1) | 1;
                CROSS(3, range, range);
                COST_MV_X4(-1, -2, 1, -2, -2, -1, 2, -1);
                COST_MV_X4(-2, 1, 2, 1, -1, 2, 1, 2);
                if (bcost == ucost2)
                    break;
                cross_start = range + 2;
            }
        }
```

这段代码定义了一个宏函数SAD_THRESH(v)，它的作用是判断一个名为bcost的变量是否小于(v >> pixel_size_shift[i_pixel])，其中i_pixel是一个整数类型的变量。如果bcost小于该值，则返回true。这个宏函数在后面的代码中会被使用。

如果bcost等于变量ucost2且SAD_THRESH(2000)返回true，则执行花括号内的代码。在这一段代码中，将调用两次宏函数COST_MV_X4()，该函数的作用是计算运动矢量的代价。接下来，如果bcost等于变量ucost1且SAD_THRESH(500)返回true，则跳出循环。如果bcost等于ucost2，则执行下一段代码。

在这一段代码中，定义了一个整型变量range，其值等于i_me_range的一半，然后将CROSS宏函数分别传递3、range和range个参数，并调用两次COST_MV_X4()宏函数，类似上一段代码。最后，如果bcost等于ucost2，则跳出循环，否则将cross_start变量的值设为range +2。


```c
        /* adaptive search range */
        if (i_mvc)
        {
            /* range multipliers based on casual inspection of some statistics of
             * average distance between current predictor and final mv found by ESA.
             * these have not been tuned much by actual encoding. */
            static const uint8_t range_mul[4][4] =
                {
                    {3, 3, 4, 4},
                    {3, 4, 4, 4},
                    {4, 4, 4, 5},
                    {4, 4, 5, 6},
                };
            int mvd;
            int sad_ctx, mvd_ctx;
            int denom = 1;

            if (i_mvc == 1)
            {
                if (i_pixel == PIXEL_16x16)
                    /* mvc is probably the same as mvp, so the difference isn't meaningful.
                     * but prediction usually isn't too bad, so just use medium range */
                    mvd = 25;
                else
                    mvd = abs(m->mvp[0] - mvc[0][0]) + abs(m->mvp[1] - mvc[0][1]);
            }
            else
            {
                /* calculate the degree of agreement between predictors. */
                /* in 16x16, mvc includes all the neighbors used to make mvp,
                 * so don't count mvp separately. */
                denom = i_mvc - 1;
                mvd = 0;
                if (i_pixel != PIXEL_16x16)
                {
                    mvd = abs(m->mvp[0] - mvc[0][0]) + abs(m->mvp[1] - mvc[0][1]);
                    denom++;
                }
                mvd += x264_predictor_difference(mvc, i_mvc);
            }

            sad_ctx = SAD_THRESH(1000)   ? 0
                      : SAD_THRESH(2000) ? 1
                      : SAD_THRESH(4000) ? 2
                                         : 3;
            mvd_ctx = mvd < 10 * denom   ? 0
                      : mvd < 20 * denom ? 1
                      : mvd < 40 * denom ? 2
                                         : 3;

            i_me_range = i_me_range * range_mul[mvd_ctx][sad_ctx] >> 2;
        }

        /* FIXME if the above DIA2/OCT2/CROSS found a new mv, it has not updated omx/omy.
         * we are still centered on the same place as the DIA2. is this desirable? */
        CROSS(cross_start, i_me_range, i_me_range >> 1);

        COST_MV_X4(-2, -2, -2, 2, 2, -2, 2, 2);

        /* hexagon grid */
        omx = bmx;
        omy = bmy;
        const uint16_t *p_cost_omvx = p_cost_mvx + omx * 4;
        const uint16_t *p_cost_omvy = p_cost_mvy + omy * 4;
        int i = 1;
        do
        {
            static const int8_t hex4[16][2] = {
                {0, -4},
                {0, 4},
                {-2, -3},
                {2, -3},
                {-4, -2},
                {4, -2},
                {-4, -1},
                {4, -1},
                {-4, 0},
                {4, 0},
                {-4, 1},
                {4, 1},
                {-4, 2},
                {4, 2},
                {-2, 3},
                {2, 3},
            };

            if (4 * i > X264_MIN4(mv_x_max - omx, omx - mv_x_min,
                                  mv_y_max - omy, omy - mv_y_min))
            {
                for (int j = 0; j < 16; j++)
                {
                    int mx = omx + hex4[j][0] * i;
                    int my = omy + hex4[j][1] * i;
                    if (CHECK_MVRANGE(mx, my))
                        COST_MV(mx, my);
                }
            }
            else
            {
                int dir = 0;
                pixel *pix_base = p_fref_w + omx + (omy - 4 * i) * stride;
                int dy = i * stride;
#define SADS(k, x0, y0, x1, y1, x2, y2, x3, y3)                          \
    h->pixf.fpelcmp_x4[i_pixel](p_fenc,                                  \
                                pix_base x0 * i + (y0 - 2 * k + 4) * dy, \
                                pix_base x1 * i + (y1 - 2 * k + 4) * dy, \
                                pix_base x2 * i + (y2 - 2 * k + 4) * dy, \
                                pix_base x3 * i + (y3 - 2 * k + 4) * dy, \
                                stride, costs + 4 * k);                  \
    pix_base += 2 * dy;
#define ADD_MVCOST(k, x, y) costs[k] += p_cost_omvx[x * 4 * i] + p_cost_omvy[y * 4 * i]
#define MIN_MV(k, x, y) COPY2_IF_LT(bcost, costs[k], dir, x * 16 + (y & 15))

                int instrets_start,instrets_end;
                __asm__ __volatile__("csrr %0, 0xC00"
                         : "=r"(instrets_start));
                         
                SADS(0, +0, -4, +0, +4, -2, -3, +2, -3);
                __asm__ __volatile__("csrr %0, 0xC00"
                         : "=r"(instrets_end));
                printf("instrets = %lld\n", instrets_end - instrets_start);
                SADS(1, -4, -2, +4, -2, -4, -1, +4, -1);
                SADS(2, -4, +0, +4, +0, -4, +1, +4, +1);
                SADS(3, -4, +2, +4, +2, -2, +3, +2, +3);
                ADD_MVCOST(0, 0, -4);
                ADD_MVCOST(1, 0, 4);
                ADD_MVCOST(2, -2, -3);
                ADD_MVCOST(3, 2, -3);
                ADD_MVCOST(4, -4, -2);
                ADD_MVCOST(5, 4, -2);
                ADD_MVCOST(6, -4, -1);
                ADD_MVCOST(7, 4, -1);
                ADD_MVCOST(8, -4, 0);
                ADD_MVCOST(9, 4, 0);
                ADD_MVCOST(10, -4, 1);
                ADD_MVCOST(11, 4, 1);
                ADD_MVCOST(12, -4, 2);
                ADD_MVCOST(13, 4, 2);
                ADD_MVCOST(14, -2, 3);
                ADD_MVCOST(15, 2, 3);
                MIN_MV(0, 0, -4);
                MIN_MV(1, 0, 4);
                MIN_MV(2, -2, -3);
                MIN_MV(3, 2, -3);
                MIN_MV(4, -4, -2);
                MIN_MV(5, 4, -2);
                MIN_MV(6, -4, -1);
                MIN_MV(7, 4, -1);
                MIN_MV(8, -4, 0);
                MIN_MV(9, 4, 0);
                MIN_MV(10, -4, 1);
                MIN_MV(11, 4, 1);
                MIN_MV(12, -4, 2);
                MIN_MV(13, 4, 2);
                MIN_MV(14, -2, 3);
                MIN_MV(15, 2, 3);
#undef SADS
#undef ADD_MVCOST
#undef MIN_MV
                if (dir)
                {
                    bmx = omx + i * (dir >> 4);
                    bmy = omy + i * ((int32_t)((uint32_t)dir << 28) >> 28);
                }
            }
        } while (++i <= i_me_range >> 2);
        if (bmy <= mv_y_max && bmy >= mv_y_min && bmx <= mv_x_max && bmx >= mv_x_min)
            goto me_hex2;
        break;
    }
```