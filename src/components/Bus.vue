<template>
  <div class="center">
    <loading :show="show1" :text="text1"></loading>
    <div v-if="show1===false">
      <tab :line-width="2" v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="710px" :show-dots="false" style="margin: auto 1px">
        <swiper-item key="0">
          <div class="tab-swiper vux-center">
            <x-table full-bordered style="background-color:#fff;">
              <thead>
                <tr>
                  <th>周次</th>
                  <th>始发站</th>
                  <th>终点站</th>
                  <th>发车时间</th>
                  <th>返回时间</th>
                </tr>
              </thead>
              <tbody>               
                <!-- 第1行 -->
                <tr align="center" bgcolor="#E6E6E6"> 
                  <td rowspan="5">周一至周五</td>                 
                  <td>大华锦绣(理工北门)</td>
                  <td>开发区校区</td>
                  <td>6:00</td>
                  <td>17:05</td>
                </tr>
                <!-- 第2行 -->
                <tr align="center">
                  <td>百合山庄</td>
                  <td>开发区校区</td>
                  <td>6:00</td>
                  <td>17:05</td>
                </tr>
                <!-- 第3行 -->
                <tr align="center" bgcolor="#E6E6E6">
                  <td>秀月街</td>
                  <td>开发区校区</td>
                  <td>6:00</td>
                  <td>17:05</td>
                </tr>
                <!-- 第4行 -->
                <tr align="center">
                  <td>马栏广场</td>
                  <td>开发区校区</td>
                  <td>6:10</td>
                  <td>17:05</td>
                </tr>
                <!-- 第5行 -->
                <tr align="center" bgcolor="#E6E6E6">
                  <td>黄河路家乐福</td>
                  <td>金石滩校区</td>
                  <td>6:40</td>
                  <td>16:30</td>
                </tr>                                
              </tbody>
            </x-table>
            <div style="font-size: 12px;margin-top: 10px">班车调度:姜东&emsp;&emsp;联系电话:<a href="tel:13998647594">13998647594</a></div>
            <div style="font-size: 12px;margin-top: 10px">学校班车运行管理:<a href="tel:87509370">87509370</a></div>
          </div>
        </swiper-item>
        <swiper-item key="1">
          <div class="tab-swiper vux-center">
            <x-table full-bordered style="background-color:#fff;">
              <thead>
                <tr>
                  <th>周次</th>
                  <th>发车时间</th>
                  <th>班车调度</th>
                  <th>电话</th>
                </tr>
              </thead>
              <tbody>               
                <!-- 第1行 -->
                <tr align="center" bgcolor="#E6E6E6">
                  <td rowspan="8">周一至周五</td>
                  <td>7:25</td>
                  <td rowspan="11">姜东</td>
                  <td rowspan="11"><a href="tel:13998647594">13998647594</a></td>
                </tr>
                <!-- 第2行 -->
                <tr align="center">                  
                  <td>7:30(2辆)</td>                    
                </tr>
                <!-- 第3行 -->
                <tr align="center" bgcolor="#E6E6E6">                  
                  <td>7:40</td>                    
                </tr>   
                <!-- 第4行 -->
                <tr align="center">                  
                  <td>9:30</td>                    
                </tr> 
                <!-- 第5行 -->
                <tr align="center" bgcolor="#E6E6E6">                  
                  <td>12:30</td>                    
                </tr>                  
                <!-- 第6行 -->
                <tr align="center">                  
                  <td>14:30</td>                    
                </tr>  
                <!-- 第7行 -->
                <tr align="center" bgcolor="#E6E6E6">                  
                  <td>17:05</td>                    
                </tr>  
                <!-- 第8行 -->
                <tr align="center">                  
                  <td>17:30</td>                    
                </tr>
                <!-- 第9行 -->
                <tr align="center">
                  <td rowspan="2">周六</td>
                  <td bgcolor="#E6E6E6">7:45</td>                    
                </tr>
                <!-- 第10行 -->
                <tr align="center">                  
                  <td>12:40</td>                    
                </tr>
                <!-- 第11行 -->
                <tr align="center" bgcolor="#E6E6E6"> 
                  <td>周日</td>                 
                  <td>7:45</td>                    
                </tr>
              </tbody>
            </x-table>            
            <div style="font-size: 12px;margin-top: 10px">学校班车运行管理:<a href="tel:87509370">87509370</a></div>
          </div>
        </swiper-item>
        <swiper-item key="2">
          <div class="tab-swiper vux-center">
            <x-table full-bordered style="background-color:#fff;">
              <thead>
                <tr>
                  <th id="lineTd">
                    <span style="float:left;margin-top:20px;margin-left:2px;"><font size="2">周次</font></span>
                    <span style="float:right;margin-top:0px;margin-right:2px;"><font size="2">候车</font></span>
                  </th>
                  <th>体育场</th>
                  <th>中区超市</th>
                  <th>致新楼</th>
                  <th>鼎新楼</th>
                  <th>闻道楼</th>
                  <th>崇实楼</th>
                  <th>西区</th>
                  <th>区间</th>
                </tr>
              </thead>
              <tbody>               
                <!-- 第1行 -->
                <tr align="center" bgcolor="#E6E6E6">
                  <td rowspan="10">周一至周五</td>                  
                  <td>/</td>
                  <td>6:45</td>
                  <td>/</td>
                  <td>/</td>
                  <td>6:50</td>
                  <td>/</td>
                  <td>/</td>
                  <td rowspan="6">金石滩-开发区</td>                    
                </tr>
                <!-- 第2行 -->
                <tr align="center">                                    
                  <td>11:55</td>
                  <td>11:56</td>
                  <td>11:59</td>
                  <td>12:01</td>
                  <td>12:06</td>
                  <td>12:07</td>
                  <td>12:12</td>
                </tr>
                <!-- 第3行 -->
                <tr align="center" bgcolor="#E6E6E6">                  
                  <td>12:30</td>
                  <td>12:31</td>
                  <td>12:34</td>
                  <td>12:36</td>
                  <td>12:41</td>
                  <td>12:42</td>
                  <td>12:47</td>
                </tr>
                <!-- 第4行 -->
                <tr align="center">                  
                  <td>15:05</td>
                  <td>15:06</td>
                  <td>15:09</td>
                  <td>15:11</td>
                  <td>15:16</td>
                  <td>15:17</td>
                  <td>15:22</td>
                </tr>
                <!-- 第5行 -->
                <tr align="center" bgcolor="#E6E6E6">                  
                  <td>16:00</td>
                  <td>16:01</td>
                  <td>/</td>
                  <td>/</td>
                  <td>16:05</td>
                  <td>16:06</td>
                  <td>/</td>
                </tr>
                <!-- 第6行 -->
                <tr align="center">                  
                  <td>/</td>
                  <td>/</td>
                  <td>16:00</td>
                  <td>16:02</td>
                  <td>/</td>
                  <td>/</td>
                  <td>16:10</td>
                </tr>
                <!-- 第7行 -->
                <tr align="center">                  
                  <td bgcolor="#E6E6E6">16:30</td>
                  <td bgcolor="#E6E6E6">16:31</td>
                  <td bgcolor="#E6E6E6">16:34</td>
                  <td bgcolor="#E6E6E6">16:36</td>
                  <td bgcolor="#E6E6E6">16:41</td>
                  <td bgcolor="#E6E6E6">16:42</td>
                  <td bgcolor="#E6E6E6">16:47</td>
                  <td>金石滩-市内</td>
                </tr>
                <!-- 第8行 -->
                <tr align="center">                  
                  <td>16:45</td>
                  <td>16:46</td>
                  <td>16:49</td>
                  <td>16:51</td>
                  <td>16:56</td>
                  <td>16:57</td>
                  <td>/</td>
                  <td rowspan="7" bgcolor="#E6E6E6">金石滩-开发区</td>
                </tr>
                <!-- 第9行 -->
                <tr align="center" bgcolor="#E6E6E6">                  
                  <td>16:55</td>
                  <td>16:56</td>
                  <td>16:59</td>
                  <td>17:01</td>
                  <td>17:06</td>
                  <td>17:07</td>
                  <td>17:12</td>
                </tr>
                <!-- 第10行 -->
                <tr align="center">                  
                  <td>20:05</td>
                  <td>20:06</td>
                  <td>20:09</td>
                  <td>20:11</td>
                  <td>/</td>
                  <td>20:15</td>
                  <td>20:20</td>
                </tr>
                <!-- 第11行 -->
                <tr align="center">
                  <td rowspan="2">周六</td>                  
                  <td bgcolor="#E6E6E6">11:50</td>
                  <td bgcolor="#E6E6E6">11:51</td>
                  <td bgcolor="#E6E6E6">11:54</td>
                  <td bgcolor="#E6E6E6">11:56</td>
                  <td bgcolor="#E6E6E6">12:01</td>
                  <td bgcolor="#E6E6E6">12:02</td>
                  <td bgcolor="#E6E6E6">12:07</td>   
                </tr> 
                <!-- 第12行 -->
                <tr align="center">                  
                  <td>16:50</td>
                  <td>16:51</td>
                  <td>16:54</td>
                  <td>16:56</td>
                  <td>17:01</td>
                  <td>17:02</td>
                  <td>17:07</td>
                </tr>
                <!-- 第13行 -->
                <tr align="center" bgcolor="#E6E6E6">
                  <td>周日</td>                  
                  <td>16:50</td>
                  <td>16:51</td>
                  <td>16:54</td>
                  <td>16:56</td>
                  <td>17:01</td>
                  <td>17:02</td>
                  <td>17:07</td>   
                </tr>   
                <!-- 第14行 -->
                <tr align="center">
                  <td>寒暑假</td>                  
                  <td>16:50</td>
                  <td>16:51</td>
                  <td>16:54</td>
                  <td>16:56</td>
                  <td>17:01</td>
                  <td>17:02</td>
                  <td>17:07</td>
                </tr>             
              </tbody>
            </x-table>
            <div style="font-size: 12px;margin-top: 10px">班车调度:姜东&emsp;&emsp;联系电话:<a href="tel:13998647594">13998647594</a></div>
            <div style="font-size: 12px;margin-top: 10px">学校班车运行管理:<a href="tel:87509370">87509370</a></div>
          </div>
        </swiper-item>        
        <swiper-item key="3">
          <div class="tab-swiper vux-center">
            <!-- <x-table full-bordered style="background-color:#fff;">
              <thead>
                <tr>
                  <th>班次</th>
                  <th colspan="4">候车地点</th>                  
                </tr>
              </thead>
              <tbody>                                               
                <tr align="center" bgcolor="#E6E6E6">                  
                  <td>南行</td>                                    
                  <td>中区超市</td>                   
                  <td>致新楼</td>
                  <td>崇实楼</td>
                  <td>闻道楼</td>                  
                </tr>
                <tr align="center">                  
                  <td>1</td>                                    
                  <td>10:00</td>                   
                  <td>10:05</td>
                  <td>10:10</td>
                  <td>/</td>                  
                </tr>
                <tr align="center">                  
                  <td>2</td>                                    
                  <td>11:05</td>                   
                  <td>11:08</td>
                  <td>/</td>
                  <td>11:20</td>                  
                </tr> 
                <tr align="center">                  
                  <td>3</td>                                    
                  <td>13:10</td>                   
                  <td>13:12</td>
                  <td>13:20</td>
                  <td>/</td>                  
                </tr>                 
                <tr align="center">                  
                  <td>4</td>                                    
                  <td>15:00</td>                   
                  <td>15:02</td>
                  <td>15:10</td>
                  <td>/</td>                  
                </tr> 
                <tr align="center" bgcolor="#E6E6E6">                  
                  <td>北行</td>                                    
                  <td>闻道楼</td>                   
                  <td>崇实楼</td>
                  <td>致新楼</td>
                  <td>中区超市</td>                  
                </tr>  
                <tr align="center">                  
                  <td>1</td>                                    
                  <td>8:20</td>                   
                  <td>/</td>
                  <td>8:25</td>
                  <td>8:28</td>                  
                </tr>
                <tr align="center">                  
                  <td>2</td>                                    
                  <td>/</td>                   
                  <td>10:10</td>
                  <td>10:15</td>
                  <td>/</td>                  
                </tr>
                <tr align="center">                  
                  <td>3</td>                                    
                  <td>11:45</td>                   
                  <td>/</td>
                  <td>11:50</td>
                  <td>11:53</td>                  
                </tr>
                <tr align="center">                  
                  <td>4</td>                                    
                  <td>12:30</td>                   
                  <td>/</td>
                  <td>12:35</td>
                  <td>12:38</td>                  
                </tr>
                <tr align="center">                  
                  <td>5</td>                                    
                  <td>/</td>                   
                  <td>13:05</td>
                  <td>13:10</td>
                  <td>/</td>                  
                </tr>
                <tr align="center">                  
                  <td>6</td>                                    
                  <td>/</td>                   
                  <td>13:20</td>
                  <td>13:25</td>
                  <td>13:28</td>                  
                </tr>
                <tr align="center">                  
                  <td>7</td>                                    
                  <td>/</td>                   
                  <td>14:55</td>
                  <td>15:00</td>
                  <td>/</td>                  
                </tr>
                <tr align="center">                  
                  <td>8</td>                                    
                  <td>/</td>                   
                  <td>15:10</td>
                  <td>15:15</td>
                  <td>15:18</td>                  
                </tr>
                <tr align="center">                  
                  <td>9</td>                                    
                  <td>/</td>                   
                  <td>18:05</td>
                  <td>15:10</td>
                  <td>/</td>                  
                </tr>
              </tbody>
            </x-table> -->
            <x-table full-bordered style="background-color:#fff;">
              <thead>
                <tr>
                  <th>班次</th>
                  <th colspan="8">乘降站点、时间</th>                  
                </tr>
              </thead>
              <tbody>               
                <!-- 第1行 -->                
                <tr align="center">                  
                  <td rowspan="2">1</td>                                    
                  <td bgcolor="#E6E6E6">闻道楼</td>                   
                  <td bgcolor="#E6E6E6">致新楼</td>
                  <td bgcolor="#E6E6E6">鼎新楼</td>
                  <td bgcolor="#E6E6E6">中区超市</td>
                  <td bgcolor="#E6E6E6"></td>  
                  <td bgcolor="#E6E6E6"></td> 
                  <td bgcolor="#E6E6E6"></td>
                  <td bgcolor="#E6E6E6"></td>               
                </tr>
                <!-- 第2行 -->
                <tr align="center">                                                     
                  <td>8:20</td>                   
                  <td>8:25</td>
                  <td>8:27</td>
                  <td>8:30</td>
                  <td></td>  
                  <td></td>
                  <td></td>
                  <td></td>                
                </tr>
                <!-- 第3行 -->
                <tr align="center">                  
                  <td rowspan="2">2</td>                                    
                  <td bgcolor="#E6E6E6">中区超市</td>                   
                  <td bgcolor="#E6E6E6">致新楼</td>
                  <td bgcolor="#E6E6E6">鼎新楼</td>
                  <td bgcolor="#E6E6E6">崇实楼</td>
                  <td bgcolor="#E6E6E6">致新楼</td>
                  <td bgcolor="#E6E6E6">鼎新楼</td>
                  <td bgcolor="#E6E6E6"></td>
                  <td bgcolor="#E6E6E6"></td>                  
                </tr> 
                <!-- 第4行 -->
                <tr align="center">                  
                  <td>10:00</td>                                    
                  <td>10:03</td>                   
                  <td>10:05</td>
                  <td>10:10</td>
                  <td>10:15</td>
                  <td>10:17</td> 
                  <td></td>  
                  <td></td>               
                </tr>                 
                <!-- 第5行 -->
                <tr align="center">                  
                  <td rowspan="2">3</td>                                    
                  <td bgcolor="#E6E6E6">中区超市</td>                   
                  <td bgcolor="#E6E6E6">致新楼</td>
                  <td bgcolor="#E6E6E6">鼎新楼</td>
                  <td bgcolor="#E6E6E6">闻道楼</td>
                  <td bgcolor="#E6E6E6">闻道楼</td>
                  <td bgcolor="#E6E6E6">致新楼</td>
                  <td bgcolor="#E6E6E6">鼎新楼</td> 
                  <td bgcolor="#E6E6E6"></td>                 
                </tr> 
                <!-- 第6行 -->
                <tr align="center">                  
                  <td>11:05</td>                                    
                  <td>11:08</td>                   
                  <td>11:10</td>
                  <td>11:15</td>
                  <td>11:50</td>
                  <td>11:55</td>
                  <td>11:57</td>                  
                  <td></td>  
                </tr>   
                <!-- 第7行 -->
                <tr align="center">                  
                  <td rowspan="2">4</td>                                    
                  <td bgcolor="#E6E6E6">鼎新楼</td>                   
                  <td bgcolor="#E6E6E6">致新楼</td>
                  <td bgcolor="#E6E6E6">闻道楼</td>
                  <td bgcolor="#E6E6E6">闻道楼</td>                  
                  <td bgcolor="#E6E6E6">致新楼</td>
                  <td bgcolor="#E6E6E6">鼎新楼</td>    
                  <td bgcolor="#E6E6E6"></td>      
                  <td bgcolor="#E6E6E6"></td>          
                </tr>
                <!-- 第8行 -->
                <tr align="center">                  
                  <td>12:05</td>                                    
                  <td>12:07</td>                   
                  <td>12:12</td>
                  <td>12:50</td>
                  <td>12:55</td>
                  <td>12:57</td>    
                  <td></td>     
                  <td></td>         
                </tr>
                <!-- 第9行 -->
                <tr align="center">                  
                  <td rowspan="2">5</td>                                    
                  <td bgcolor="#E6E6E6">中区超市</td>                   
                  <td bgcolor="#E6E6E6">致新楼</td>
                  <td bgcolor="#E6E6E6">鼎新楼</td>
                  <td bgcolor="#E6E6E6">崇实楼</td>                  
                  <td bgcolor="#E6E6E6">致新楼</td>
                  <td bgcolor="#E6E6E6">鼎新楼</td>  
                  <td bgcolor="#E6E6E6"></td>      
                  <td bgcolor="#E6E6E6"></td>                
                </tr>
                <!-- 第10行 -->
                <tr align="center">                  
                  <td>13:10</td>                                    
                  <td>13:13</td>                   
                  <td>13:15</td>
                  <td>13:20</td>
                  <td>13:25</td>
                  <td>13:27</td>  
                  <td></td>     
                  <td></td>                
                </tr>
                <!-- 第11行 -->
                <tr align="center">                  
                  <td rowspan="2">6</td>                                    
                  <td bgcolor="#E6E6E6">崇实楼</td>                   
                  <td bgcolor="#E6E6E6">致新楼</td>
                  <td bgcolor="#E6E6E6">鼎新楼</td>     
                  <td bgcolor="#E6E6E6"></td>      
                  <td bgcolor="#E6E6E6"></td>
                  <td bgcolor="#E6E6E6"></td>      
                  <td bgcolor="#E6E6E6"></td>
                  <td bgcolor="#E6E6E6"></td>                                                   
                </tr>
                <!-- 第12行 -->
                <tr align="center">                                                 
                  <td>14:55</td>
                  <td>15:00</td>
                  <td>15:02</td>    
                  <td></td>     
                  <td></td>
                  <td></td>     
                  <td></td>
                  <td></td>                                     
                </tr>
                <!-- 第13行 -->
                <tr align="center">                  
                  <td rowspan="2">7</td>                                    
                  <td bgcolor="#E6E6E6">中区超市</td>                   
                  <td bgcolor="#E6E6E6">崇实楼</td>
                  <td bgcolor="#E6E6E6">致新楼</td>
                  <td bgcolor="#E6E6E6">鼎新楼</td>  
                  <td bgcolor="#E6E6E6"></td>      
                  <td bgcolor="#E6E6E6"></td>
                  <td bgcolor="#E6E6E6"></td>      
                  <td bgcolor="#E6E6E6"></td>                                  
                </tr>
                <!-- 第14行 -->
                <tr align="center">                  
                  <td>15:05</td>                                    
                  <td>15:10</td>                   
                  <td>15:15</td>
                  <td>15:17</td>       
                  <td></td>
                  <td></td>     
                  <td></td>
                  <td></td>         
                </tr>
                <!-- 第15行 -->
                <tr align="center">                  
                  <td rowspan="2">8</td>                                    
                  <td bgcolor="#E6E6E6">崇实楼</td>                   
                  <td bgcolor="#E6E6E6">致新楼</td>
                  <td bgcolor="#E6E6E6">鼎新楼</td>
                  <td bgcolor="#E6E6E6">中区超市</td>
                  <td bgcolor="#E6E6E6">中区超市</td>
                  <td bgcolor="#E6E6E6">致新楼</td>
                  <td bgcolor="#E6E6E6">鼎新楼</td>
                  <td bgcolor="#E6E6E6">崇实楼</td>                                    
                </tr>
                <!-- 第16行 -->
                <tr align="center">                  
                  <td>17:00</td>                                    
                  <td>17:05</td>                   
                  <td>17:07</td>
                  <td>17:10</td>
                  <td>18:05</td>
                  <td>18:08</td> 
                  <td>18:10</td> 
                  <td>18:15</td>              
                </tr>
              </tbody>
            </x-table>   
            <div style="font-size: 12px;margin-top: 10px">班车调度:姜东&emsp;&emsp;联系电话:<a href="tel:13998647594">13998647594</a></div>         
            <div style="font-size: 12px;margin-top: 10px">学校班车运行管理:<a href="tel:87509370">87509370</a></div>
          </div>
        </swiper-item>
      </swiper>
    </div>
  </div>    
</template>

<script>
import { Loading, Tab, TabItem, XTable, Swiper, SwiperItem } from 'vux'
const list = () => ['市内-开发区', '开发区-金石滩', '金石滩-开发区', '金石滩摆渡车']
export default {
  name: 'Bus',
  components: {
    Loading,
    Tab,
    TabItem,
    XTable,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      list2: list(),
      demo2: '市内-开发区',
      index: 0,
      show1: true,
      text1: '加载中'
    }
  },
  methods: {

  },
  /* vue实例对象创建前 */
  beforeCreate () {

  },
  /* vue实例对象创建后 */
  created () {

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
  },
  /* 触发存在activated()函数的页面，可用于初始化页面数据 */
  activated () {

  },
  /* vue实例对象销毁后 */
  destroyed () {

  }
}
</script>

<style lang="less"> 
body {
  background-color: #fbf9fe;
}
#lineTd {
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjEwMCUiIHkyPSIxMDAlIiBzdHJva2U9IiNDN0M3QzciIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==) no-repeat 100% center;   
}
a {
  color: #4B77B0;
}
.center table th {
  font-size: 13px;
  font-weight: bold;
}

.center table td {
  font-size: 12px;
}
</style>