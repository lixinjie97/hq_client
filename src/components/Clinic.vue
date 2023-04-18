<template>
    <div>
        <loading :show="show1" :text="text1"></loading>
        <div v-if="show1===false">
            <tab :line-width=2 v-model="index">
                <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
            </tab>
            <swiper v-model="index" height="1920px" :show-dots="false" style="margin: auto 1px">
                <swiper-item>
                    <div class="tab-swiper vux-center" >
                        <x-table style="background-color:#fff;width:100%">
                            <thead>
                                <tr>
                                    <th min-width="100px" style="font-weight:bold;">日期</th>
                                    <th min-width="100px" style="font-weight:bold;">星期</th>
                                    <th min-width="100px" style="font-weight:bold;">班</th>
                                    <th min-width="100px" style="font-weight:bold;">医生</th>
                                    <th width="40px" style="font-weight:bold;">电话</th>
                                    <th min-width="100px" style="font-weight:bold;">护士</th>
                                    <th width="40px" style="font-weight:bold;">电话</th>
                                </tr>
                            </thead>
                            <tbody style="font-size:12px;">               
                                <!-- 第1行 -->
                                <tr align="center" bgcolor="#E6E6E6">
                                    <td>3-01</td>
                                    <td>二</td>
                                    <td>日<br/>夜</td> 
                                    <td>于大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>范护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第2行 2	10-20	三	于大夫	13390000926	金护士	13478960826	郭大夫	13644235016	马护士	15241191117	一楼一诊室-->
                                <tr align="center">                                    
                                    <td>3-02</td>
                                    <td>三</td>
                                    <td>日<br>夜</td> 
                                    <td>于大夫<br>杜大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>于护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第3行 3	10-21	四	于大夫	13390000926	金护士	13478960826	杜大夫	13125470006	赵护士	15840650260	一楼一诊室-->
                                <tr align="center" bgcolor="#E6E6E6">
                                    <td>3-03</td>
                                    <td>四</td>
                                    <td>日<br>夜</td> 
                                    <td>于大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>范护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第4行 4	10-22	五	于大夫	13390000926	金护士	13478960826	郭大夫	13644235016	马护士	15241191117	一楼一诊室-->
                                <tr align="center">                                    
                                    <td>3-04</td>
                                    <td>五</td>
                                    <td>日<br>夜</td> 
                                    <td>于大夫<br>杜大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>于护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第5行 5	10-23	六	杜大夫	13125470006	赵护士	15840650260	杜大夫	13125470006	赵护士	15840650260	一楼一诊室-->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-05</td>
                                    <td>六</td>
                                    <td>日<br>夜</td> 
                                    <td>郭大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>范护士<br>范护士</td>
                                    <td><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第6行 6	10-24		郭大夫	13644235016	马护士	15241191117	郭大夫	13644235016	马护士	15241191117	一楼一诊室-->
                                <tr align="center">                                    
                                    <td>3-06</td>
                                    <td>日</td>
                                    <td>日<br>夜</td> 
                                    <td>杜大夫<br>杜大夫</td>
                                    <td><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>于护士<br>于护士</td>
                                    <td><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第7行 7	10-25	一	于大夫	13390000926	金护士	13478960826	杜大夫	13125470006	赵护士	15840650260	一楼一诊室-->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-07</td>
                                    <td>一</td>
                                    <td>日<br>夜</td> 
                                    <td>于大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>范护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 8 8	10-26	二	于大夫	13390000926	金护士	13478960826	郭大夫	13644235016	马护士	15241191117	一楼一诊室-->
                                <tr align="center">                                    
                                    <td>3-08</td>
                                    <td>二</td>
                                    <td>日<br>夜</td> 
                                    <td>于大夫<br>杜大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>于护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第9行 9	10-27	三	于大夫	13390000926	金护士	13478960826	杜大夫	13125470006	赵护士	15840650260	一楼一诊室-->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-09</td>
                                    <td>三</td>
                                    <td>日<br>夜</td> 
                                    <td>于大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>范护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第10行 10	10-28	四	于大夫	13390000926	金护士	13478960826	郭大夫	13644235016	马护士	15241191117	一楼一诊室-->
                                <tr align="center" >                                
                                    <td>3-10</td>
                                    <td>四</td>
                                    <td>日<br>夜</td> 
                                    <td>于大夫<br>杜大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>于护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>                                    
                                </tr>
                                <!-- 第11行 11	10-29	五	于大夫	13390000926	金护士	13478960826	杜大夫	13125470006	赵护士	15840650260	一楼一诊室-->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-11</td>
                                    <td>五</td>
                                    <td>日<br>夜</td> 
                                    <td>于大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>范护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>                                    
                                </tr>
                                <!-- 12 12	10-30	六	郭大夫	13644235016	马护士	15241191117	郭大夫	13644235016	马护士	15241191117	一楼一诊室-->
                                <tr align="center">                                    
                                    <td>3-12</td>
                                    <td>六</td>
                                    <td>日<br>夜</td> 
                                    <td>杜大夫<br>杜大夫</td>
                                    <td><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>于护士<br>于护士</td>
                                    <td><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 13 13	10-31		杜大夫	13125470006	赵护士	15840650260	杜大夫	13125470006	赵护士	15840650260	一楼一诊室-->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-13</td>
                                    <td>日</td>
                                    <td>日<br>夜</td> 
                                    <td>郭大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>范护士<br>范护士</td>
                                    <td><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第14行 -->
                                <tr align="center">
                                    <td>3-14</td>
                                    <td>一</td>
                                    <td>日<br/>夜</td> 
                                    <td>于大夫<br>杜大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>于护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第15行 -->
                                <tr align="center" bgcolor="#E6E6E6">
                                    <td>3-15</td>
                                    <td>二</td>
                                    <td>日<br/>夜</td> 
                                    <td>于大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>范护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第16行 -->
                                <tr align="center">
                                    <td>3-16</td>
                                    <td>三</td>
                                    <td>日<br/>夜</td> 
                                    <td>于大夫<br>杜大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>于护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第17行 -->
                                <tr align="center" bgcolor="#E6E6E6">
                                    <td>3-17</td>
                                    <td>四</td>
                                    <td>日<br/>夜</td> 
                                    <td>于大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>范护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第18行 -->
                                <tr align="center">
                                    <td>3-18</td>
                                    <td>五</td>
                                    <td>日<br/>夜</td> 
                                    <td>于大夫<br>杜大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>于护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第19行 -->
                                <tr align="center" bgcolor="#E6E6E6">
                                    <td>3-19</td>
                                    <td>六</td>
                                    <td>日<br/>夜</td> 
                                    <td>郭大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>范护士<br>范护士</td>
                                    <td><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第20行 -->
                                <tr align="center">
                                    <td>3-20</td>
                                    <td>日</td>
                                    <td>日<br/>夜</td> 
                                    <td>杜大夫<br>杜大夫</td>
                                    <td><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>于护士<br>于护士</td>
                                    <td><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第21行 -->
                                <tr align="center" bgcolor="#E6E6E6">
                                    <td>3-21</td>
                                    <td>一</td>
                                    <td>日<br/>夜</td> 
                                    <td>于大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>范护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第22行 -->
                                <tr align="center">
                                    <td>3-22</td>
                                    <td>二</td>
                                    <td>日<br/>夜</td> 
                                    <td>于大夫<br>杜大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>于护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第23行 -->
                                <tr align="center" bgcolor="#E6E6E6">
                                    <td>3-23</td>
                                    <td>三</td>
                                    <td>日<br/>夜</td> 
                                    <td>于大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>范护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第24行 -->
                                <tr align="center">
                                    <td>3-24</td>
                                    <td>四</td>
                                    <td>日<br/>夜</td> 
                                    <td>于大夫<br>杜大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>于护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第25行 -->
                                <tr align="center" bgcolor="#E6E6E6">
                                    <td>3-25</td>
                                    <td>五</td>
                                    <td>日<br/>夜</td> 
                                    <td>于大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>范护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第26行 -->
                                <tr align="center">
                                    <td>3-26</td>
                                    <td>六</td>
                                    <td>日<br/>夜</td> 
                                    <td>杜大夫<br>杜大夫</td>
                                    <td><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>于护士<br>于护士</td>
                                    <td><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第27行 -->
                                <tr align="center" bgcolor="#E6E6E6">
                                    <td>3-27</td>
                                    <td>日</td>
                                    <td>日<br/>夜</td> 
                                    <td>郭大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>范护士<br>范护士</td>
                                    <td><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第28行 -->
                                <tr align="center">
                                    <td>3-28</td>
                                    <td>一</td>
                                    <td>日<br/>夜</td> 
                                    <td>于大夫<br>杜大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>于护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第29行 -->
                                <tr align="center" bgcolor="#E6E6E6">
                                    <td>3-29</td>
                                    <td>二</td>
                                    <td>日<br/>夜</td> 
                                    <td>于大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>范护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第30行 -->
                                <tr align="center">
                                    <td>3-30</td>
                                    <td>三</td>
                                    <td>日<br/>夜</td> 
                                    <td>于大夫<br>杜大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13125470006"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>于护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13909853428"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第31行 -->
                                <tr align="center" bgcolor="#E6E6E6">
                                    <td>3-31</td>
                                    <td>四</td>
                                    <td>日<br/>夜</td> 
                                    <td>于大夫<br>郭大夫</td>
                                    <td><a :href="'tel:' + 13390000926"><img style="height:15px" src="../assets/phone.svg" alt="电话">  </a><br><a :href="'tel:' + 13644235016"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>赵护士<br>范护士</td>
                                    <td><a :href="'tel:' + 15840650260"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 18504239095"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                            </tbody>
                        </x-table>
                    </div>
                    <div class="bottomFont">备注：开发区校区卫生所座机电话号码：<a :href="'tel:' + 87656309">87656309</a></div>
                    <div class="bottomFont">地点：一楼一诊室</div>
                </swiper-item>
                <swiper-item>
                    <div class="tab-swiper vux-center">
                        <x-table full-bordered style="background-color:#fff;">
                            <thead>
                                <tr>
                                    <th min-width="100px" style="font-weight:bold;">日期</th>
                                    <th min-width="100px" style="font-weight:bold;">星期</th>
                                    <th min-width="100px" style="font-weight:bold;">班</th>
                                    <th min-width="100px" style="font-weight:bold;">医生</th>
                                    <th width="40px" style="font-weight:bold;">电话</th>
                                    <th min-width="100px" style="font-weight:bold;">护士</th>
                                    <th width="40px" style="font-weight:bold;">电话</th>                                    
                                </tr>
                            </thead>
                            <tbody style="font-size:12px;">               
                                <!-- 第1行 1	10-19	二	肖大夫	13942828151	杨护士	15542334112	付大夫	13804241707	韩护士	13478614029	"金石滩校区中区卫生所大厅预检分诊处"-->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-01</td>
                                    <td>二</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>刘护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15242620272"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第2行 2	10-20	三	肖大夫	13942828151	杨护士	15542334112	徐大夫	13898621358	王护士	15140531411	"金石滩校区中区卫生所大厅预检分诊处"-->
                                <tr align="center">                                    
                                    <td>3-02</td>
                                    <td>三</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>付大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>刘护士<br>韩护士</td>
                                    <td><a :href="'tel:' + 15242620272"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>                                    
                                </tr>
                                <!-- 第3行 3	10-21	四	肖大夫	13942828151	杨护士	15542334112	付大夫	13804241707	韩护士	13478614029	"金石滩校区中区卫生所大厅预检分诊处"-->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-03</td>
                                    <td>四</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>刘护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15242620272"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>                                    
                                </tr>
                                <!-- 第4行 4	10-22	五	肖大夫	13942828151	杨护士	15542334112	徐大夫	13898621358	王护士	15140531411	"金石滩校区中区卫生所大厅预检分诊处"-->
                                <tr align="center">                                    
                                    <td>3-04</td>
                                    <td>五</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>付大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>刘护士<br>韩护士</td>
                                    <td><a :href="'tel:' + 15242620272"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>                                    
                                </tr>
                                <!-- 第5行 5	10-23	六	付大夫	13804241707	韩护士	13478614029	付大夫	13804241707	韩护士	13478614029	"金石滩校区中区卫生所大厅预检分诊处"-->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-05</td>
                                    <td>六</td>
                                    <td>日<br>夜</td> 
                                    <td>徐大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>王护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15542334113"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>                                    
                                </tr>
                                <!-- 第6行6	10-24		徐大夫	13898621358	王护士	15140531411	徐大夫	13898621358	王护士	15140531411	"金石滩校区中区卫生所大厅预检分诊处"-->
                                <tr align="center">                                    
                                    <td>3-06</td>
                                    <td>日</td>
                                    <td>日<br>夜</td> 
                                    <td>付大夫<br>付大夫</td>
                                    <td><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>韩护士<br>韩护士</td>
                                    <td><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>                                    
                                </tr>
                                <!-- 7	10-25	一	肖大夫	13942828151	杨护士	15842632822	付大夫	13804241707	韩护士	13478614029	"金石滩校区中区卫生所大厅预检分诊处"-->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-07</td>
                                    <td>一</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>杨护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15542334112"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>                                    
                                </tr>
                                <!--8	10-26	二	肖大夫	13942828151	杨护士	15842632822	徐大夫	13898621358	王护士	15140531411	"金石滩校区中区卫生所大厅预检分诊处"-->
                                <tr align="center">                                    
                                    <td>3-08</td>
                                    <td>二</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>付大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>杨护士<br>韩护士</td>
                                    <td><a :href="'tel:' + 15542334112"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>                                    
                                </tr>
                                <!-- 9	10-27	三	肖大夫	13942828151	杨护士	15842632822	付大夫	13804241707	韩护士	13478614029	"金石滩校区中区卫生所大厅预检分诊处"-->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-09</td>
                                    <td>三</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>杨护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15542334112"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>                                    
                                </tr>
                                <!-- 10	10-28	四	肖大夫	13942828151	杨护士	15842632822	徐大夫	13898621358	王护士	15140531411	"金石滩校区中区卫生所大厅预检分诊处"-->
                                <tr align="center" >                                    
                                    <td>3-10</td>
                                    <td>四</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>付大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>杨护士<br>韩护士</td>
                                    <td><a :href="'tel:' + 15542334112"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>                                    
                                </tr>
                                <!-- 11	10-29	五	肖大夫	13942828151	杨护士	15842632822	付大夫	13804241707	韩护士	13478614029	"金石滩校区中区卫生所大厅预检分诊处"-->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-11</td>
                                    <td>五</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>杨护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15542334112"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>                                    
                                </tr>
                                <!-- 第12行 -->
                                <tr align="center">                                    
                                    <td>3-12</td>
                                    <td>六</td>
                                    <td>日<br>夜</td> 
                                    <td>付大夫<br>付大夫</td>
                                    <td><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>韩护士<br>韩护士</td>
                                    <td><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>                                    
                                </tr>
                                <!-- 第13行 -->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-13</td>
                                    <td>日</td>
                                    <td>日<br>夜</td> 
                                    <td>徐大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>王护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>                                    
                                </tr>
                                <!-- 第14行 -->
                                <tr align="center">                                    
                                    <td>3-14</td>
                                    <td>一</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>付大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>刘护士<br>韩护士</td>
                                    <td><a :href="'tel:' + 15242620272"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第15行 -->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-15</td>
                                    <td>二</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>刘护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15242620272"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第16行 -->
                                <tr align="center">                                    
                                    <td>3-16</td>
                                    <td>三</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>付大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>刘护士<br>韩护士</td>
                                    <td><a :href="'tel:' + 15242620272"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第17行 -->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-17</td>
                                    <td>四</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>刘护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15242620272"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第18行 -->
                                <tr align="center">                                    
                                    <td>3-18</td>
                                    <td>五</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>付大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>刘护士<br>韩护士</td>
                                    <td><a :href="'tel:' + 15242620272"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第19行 -->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-19</td>
                                    <td>六</td>
                                    <td>日<br>夜</td> 
                                    <td>徐大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>王护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第20行 -->
                                <tr align="center">                                    
                                    <td>3-20</td>
                                    <td>日</td>
                                    <td>日<br>夜</td> 
                                    <td>付大夫<br>付大夫</td>
                                    <td><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>韩护士<br>韩护士</td>
                                    <td><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第21行 -->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-21</td>
                                    <td>一</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>杨护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15542334112"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第22行 -->
                                <tr align="center">                                    
                                    <td>3-22</td>
                                    <td>二</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>付大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>杨护士<br>韩护士</td>
                                    <td><a :href="'tel:' + 15542334112"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第23行 -->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-23</td>
                                    <td>三</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>杨护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15542334112"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第24行 -->
                                <tr align="center">                                    
                                    <td>3-24</td>
                                    <td>四</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>付大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>杨护士<br>韩护士</td>
                                    <td><a :href="'tel:' + 15542334112"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第25行 -->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-25</td>
                                    <td>五</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>杨护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15542334112"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第26行 -->
                                <tr align="center">                                    
                                    <td>3-26</td>
                                    <td>六</td>
                                    <td>日<br>夜</td> 
                                    <td>付大夫<br>付大夫</td>
                                    <td><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>韩护士<br>韩护士</td>
                                    <td><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第27行 -->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-27</td>
                                    <td>日</td>
                                    <td>日<br>夜</td> 
                                    <td>徐大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>王护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第28行 -->
                                <tr align="center">                                    
                                    <td>3-28</td>
                                    <td>一</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>付大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>刘护士<br>韩护士</td>
                                    <td><a :href="'tel:' + 15242620272"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第29行 -->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-29</td>
                                    <td>二</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>刘护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15242620272"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第30行 -->
                                <tr align="center">                                    
                                    <td>3-30</td>
                                    <td>三</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>付大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13804241707"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>刘护士<br>韩护士</td>
                                    <td><a :href="'tel:' + 15242620272"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13478614029"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                                <!-- 第31行 -->
                                <tr align="center" bgcolor="#E6E6E6">                                    
                                    <td>3-31</td>
                                    <td>四</td>
                                    <td>日<br>夜</td> 
                                    <td>吴大夫<br>徐大夫</td>
                                    <td><a :href="'tel:' + 15142451665"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 13898621358"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                    <td>刘护士<br>王护士</td>
                                    <td><a :href="'tel:' + 15242620272"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a><br><a :href="'tel:' + 15140531411"><img style="height:15px" src="../assets/phone.svg" alt="电话"></a></td>
                                </tr>
                            </tbody>
                        </x-table>                
                    </div>
                    <div class="bottomFont">备注：金石滩校区卫生所座机电话号码：<a :href="'tel:' + 87557069">87557069</a>（中午不停诊）</div>
                    <div class="bottomFont">地点：金石滩校区中区卫生所大厅预检分诊处</div>                    
                </swiper-item>
            </swiper>
        </div>
    </div>  
</template>

<script>
import { Loading, Tab, TabItem, XTable, Swiper, SwiperItem } from 'vux'
// import SvgIcon from '../assets/phone.svg' // svg组件

const list = () => ['开发区校区 ', '金石滩校区']
export default {
  name: 'Clinic',
  components: {
    Loading,
    Tab,
    TabItem,
    XTable,
    Swiper,
    SwiperItem
    // SvgIcon
  },
  data () {
    return {
      list2: list(),
      demo2: '1',
      index: 0,
      show1: true,
      text1: '加载中'
    }
  },
  methods: {

  },
  /* vue实例对象载入后 */
  mounted () {
    /* vue实例对象载入后刷新页面一次 */
    // if (location.href.indexOf('#reloaded') === -1) {
    //   location.href = location.href + '#reloaded'
    //   location.reload()
    // }
    /* loading */
    setTimeout(() => {
      this.show1 = false
    }, 200)
  }
}
</script>


<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../style/theme.less';
body {
  background-color: #fbf9fe;
}
table thead {
  width: 100%;
  font-size: 13px;
  tr {
    th {
      font-weight: bold;
    }
  }
}

a{
    color:#4B77B0; 
}
.bottomFont{
  font-size: 12px;
  margin-top: 10px
}
tr{
  line-height:30px;
}
</style>
