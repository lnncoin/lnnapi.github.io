(self.webpackChunklnnapi=self.webpackChunklnnapi||[]).push([[561],{8173:(s,t,a)=>{"use strict";a.r(t),a.d(t,{data:()=>n});const n={key:"v-29232f98",path:"/zh-cn/http/order.html",title:"订单模块(SpotOrder)",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"订单查询(QueryOrder)",slug:"订单查询-queryorder",children:[]},{level:3,title:"查询所有未成交/部分成交订单(QueryAllOpenOrder)",slug:"查询所有未成交-部分成交订单-queryallopenorder",children:[]},{level:3,title:"查询单个订单(QueryOneOrder)",slug:"查询单个订单-queryoneorder",children:[]},{level:3,title:"创建限价单(CreateLimitPriceOrder)",slug:"创建限价单-createlimitpriceorder",children:[]},{level:3,title:"创建IOC订单(CreateIocOrder)",slug:"创建ioc订单-createiocorder",children:[]},{level:3,title:"创建FOK订单(CreateFokOrder)",slug:"创建fok订单-createfokorder",children:[]},{level:3,title:"创建计划委托单(CreateStopLimitOrder)",slug:"创建计划委托单-createstoplimitorder",children:[]},{level:3,title:"创建postonly限价单(CreatePostOnlyOrder)",slug:"创建postonly限价单-createpostonlyorder",children:[]},{level:3,title:"创建市价单(CreateMarketPriceOrder)",slug:"创建市价单-createmarketpriceorder",children:[]},{level:3,title:"批量创建订单(BatchedCreateOrders)[仅限高级用户使用]",slug:"批量创建订单-batchedcreateorders-仅限高级用户使用",children:[]},{level:3,title:"取消订单(CancelOrder)",slug:"取消订单-cancelorder",children:[]},{level:3,title:"批量取消订单(BatchedCancelOrders)[仅限高级用户使用]",slug:"批量取消订单-batchedcancelorders-仅限高级用户使用",children:[]},{level:3,title:"取消所有订单(CancelAllOrders)",slug:"取消所有订单-cancelallorders",children:[]}],filePathRelative:"zh-cn/http/order.md",git:{updatedTime:1625035966e3,contributors:[{name:"Lawetis-Lee",email:"es6china@163.com",commits:2},{name:"397702186@qq.com",email:"397702186@qq.com",commits:1}]}}},3124:(s,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});const n=(0,a(6252).uE)('<h1 id="订单模块-spotorder" tabindex="-1"><a class="header-anchor" href="#订单模块-spotorder" aria-hidden="true">#</a> 订单模块(SpotOrder)</h1><h3 id="订单查询-queryorder" tabindex="-1"><a class="header-anchor" href="#订单查询-queryorder" aria-hidden="true">#</a> 订单查询(QueryOrder)</h3><p>接口: <code>/SpotOrder/QueryOrder</code><br> 请求方式: <code>GET</code><br> 参数列表:</p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>Side</td><td>Int</td><td>交易方向, 0:全部 1:买入 2:卖出</td></tr><tr><td>TradeSymbol</td><td>String</td><td>交易对名称, 例如: <code>BTC_USDT</code></td></tr><tr><td>OrderState</td><td>Int32</td><td>订单状态 1:待成交 2:已成交 3:已取消</td></tr><tr><td>StartTime</td><td>Int64</td><td>查询订单开始时间戳精确到秒, 0代表不限制 [选填参数默认值0]</td></tr><tr><td>EndTime</td><td>Int64</td><td>查询订单结束时间戳精确到秒, 0代表不限制 [选填参数默认值0]</td></tr><tr><td>PageIndex</td><td>Int32</td><td>查询第几页(每页20条记录), 从1开始 [选填参数默认值1]</td></tr></tbody></table><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">{</span></span>\n<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;OrderList&quot;</span><span style="color:#000000;">:</span></span>\n<span class="line"><span style="color:#000000;">\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t{</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;OrderId&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单Id(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;Side&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">交易方向</span><span style="color:#000000;">, </span><span style="color:#CD3131;">0</span><span style="color:#000000;">:</span><span style="color:#CD3131;">全部</span><span style="color:#000000;"> </span><span style="color:#098658;">1</span><span style="color:#CD3131;">:买入</span><span style="color:#000000;"> </span><span style="color:#098658;">2</span><span style="color:#CD3131;">:卖出(Int)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;TradeSymbol&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">交易对名称(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;Price&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单价格(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;Amount&quot;</span><span style="color:#CD3131;">：</span><span style="color:#000000;"> </span><span style="color:#CD3131;">订单的交易数量(Float64),</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;AvgPrice&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">已成交平均价格(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;FinishAmount&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">已成交数量(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;TradeTotalSum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">已成交金额(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;TotalSum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单的委托金额(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;OrderType&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单类型(Int)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;Fee&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">手续费(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;StopLimitType&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">计划委托触发类型(Int)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;StopLimitPrice&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">计划委托的触发价格，仅计划委托单才有此数据(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;CreateTime&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单创建时间精确到毫秒(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;State&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单状态(Int)</span></span>\n<span class="line"><span style="color:#000000;">\t\t},</span></span>\n<span class="line"><span style="color:#000000;">\t\t</span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">\t],</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;DataTotalNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">满足条件的总数量(Int</span><span style="color:#098658;">32</span><span style="color:#CD3131;">)</span></span>\n<span class="line"><span style="color:#000000;">}</span></span>\n<span class="line"></span></code></pre></div><p>备注:</p><h4 id="订单类型" tabindex="-1"><a class="header-anchor" href="#订单类型" aria-hidden="true">#</a> 订单类型</h4><table><thead><tr><th>取值</th><th>说明</th></tr></thead><tbody><tr><td>1</td><td>普通限价单</td></tr><tr><td>2</td><td>市价单</td></tr><tr><td>3</td><td>IOC</td></tr><tr><td>4</td><td>FOK</td></tr><tr><td>5</td><td>计划委托</td></tr><tr><td>6</td><td>PostOnly限价单</td></tr></tbody></table><h4 id="订单状态" tabindex="-1"><a class="header-anchor" href="#订单状态" aria-hidden="true">#</a> 订单状态</h4><table><thead><tr><th>取值</th><th>说明</th></tr></thead><tbody><tr><td>1</td><td>订单已创建，但未进入撮合队列</td></tr><tr><td>2</td><td>计划委托单等待触发中</td></tr><tr><td>3</td><td><strong>撮合中</strong></td></tr><tr><td>4</td><td>订单已完成</td></tr><tr><td>5</td><td>订单由于内部错误而取消</td></tr><tr><td>6</td><td>用户手动取消中</td></tr><tr><td>7</td><td>用户已手动取消</td></tr><tr><td>8</td><td>订单已被系统取消</td></tr></tbody></table><h4 id="计划委托触发类型" tabindex="-1"><a class="header-anchor" href="#计划委托触发类型" aria-hidden="true">#</a> 计划委托触发类型</h4><table><thead><tr><th>取值</th><th>说明</th></tr></thead><tbody><tr><td>1</td><td>大于等于触发价格时触发</td></tr><tr><td>2</td><td>小于等于触发价格时触发</td></tr></tbody></table><h4 id="计划委托触发后订单执行类型" tabindex="-1"><a class="header-anchor" href="#计划委托触发后订单执行类型" aria-hidden="true">#</a> 计划委托触发后订单执行类型</h4><table><thead><tr><th>取值</th><th>说明</th></tr></thead><tbody><tr><td>0</td><td>限价执行</td></tr><tr><td>1</td><td>市价执行</td></tr></tbody></table><h3 id="查询所有未成交-部分成交订单-queryallopenorder" tabindex="-1"><a class="header-anchor" href="#查询所有未成交-部分成交订单-queryallopenorder" aria-hidden="true">#</a> 查询所有未成交/部分成交订单(QueryAllOpenOrder)</h3><p>接口: <code>/SpotOrder/QueryAllOpenOrder</code><br> 请求方式: <code>GET</code><br> 参数列表: <br></p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>Side</td><td>Int</td><td>交易方向: 0 全部 1 买入 2 卖出</td></tr><tr><td>TradeSymbol</td><td>String</td><td>交易对名称, 例如: <code>BTC_USDT</code></td></tr><tr><td>StartTime</td><td>Int64</td><td>查询订单开始时间戳精确到秒, 0代表不限制 [选填参数默认值0]</td></tr><tr><td>EndTime</td><td>Int64</td><td>查询订单结束时间戳精确到秒, 0代表不限制 [选填参数默认值0]</td></tr></tbody></table><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">{</span></span>\n<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;OrderList&quot;</span><span style="color:#000000;">:</span></span>\n<span class="line"><span style="color:#000000;">\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t{</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;OrderId&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单Id(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;Side&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">交易方向</span><span style="color:#000000;">, </span><span style="color:#CD3131;">0</span><span style="color:#000000;">:</span><span style="color:#CD3131;">全部</span><span style="color:#000000;"> </span><span style="color:#098658;">1</span><span style="color:#CD3131;">:买入</span><span style="color:#000000;"> </span><span style="color:#098658;">2</span><span style="color:#CD3131;">:卖出(Int)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;TradeSymbol&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">交易对名称(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;Price&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单价格(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;Amount&quot;</span><span style="color:#CD3131;">：</span><span style="color:#000000;"> </span><span style="color:#CD3131;">订单的交易数量(Float64),</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;AvgPrice&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">已成交平均价格(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;FinishAmount&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">已成交数量(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;TradeTotalSum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">已成交金额(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;TotalSum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单的委托金额(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;OrderType&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单类型(Int)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;Fee&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">手续费(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;StopLimitType&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">计划委托触发类型(Int)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;StopLimitPrice&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">计划委托的触发价格，仅计划委托单才有此数据(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;CreateTime&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单创建时间精确到毫秒(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;State&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单状态(Int)</span></span>\n<span class="line"><span style="color:#000000;">\t\t},</span></span>\n<span class="line"><span style="color:#000000;">\t\t</span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">\t],</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;DataTotalNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">满足条件的总数量</span></span>\n<span class="line"><span style="color:#000000;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="查询单个订单-queryoneorder" tabindex="-1"><a class="header-anchor" href="#查询单个订单-queryoneorder" aria-hidden="true">#</a> 查询单个订单(QueryOneOrder)</h3><p>接口: <code>/SpotOrder/QueryOneOrder</code><br> 请求方式: <code>GET</code><br> 参数列表:</p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>OrderId</td><td>String</td><td>订单Id</td></tr></tbody></table><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">{</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;OrderId&quot;</span><span style="color:#000000;">:</span><span style="color:#CD3131;">订单Id(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;Side&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">交易方向</span><span style="color:#000000;">, </span><span style="color:#CD3131;">0</span><span style="color:#000000;">:</span><span style="color:#CD3131;">全部</span><span style="color:#000000;"> </span><span style="color:#098658;">1</span><span style="color:#CD3131;">:买入</span><span style="color:#000000;"> </span><span style="color:#098658;">2</span><span style="color:#CD3131;">:卖出(Int)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;TradeSymbol&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">交易对名称(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;Price&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单价格(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;Amount&quot;</span><span style="color:#CD3131;">：</span><span style="color:#000000;"> </span><span style="color:#CD3131;">订单的交易数量(Float64),</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;AvgPrice&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">已成交平均价格(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;FinishAmount&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">已成交数量(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;TradeTotalSum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">已成交金额(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;TotalSum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单的委托金额(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;OrderType&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单类型(Int)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;Fee&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">手续费(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;StopLimitType&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">计划委托触发类型(Int)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;StopLimitPrice&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">计划委托的触发价格，仅计划委托单才有此数据(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;StopLimitOrderType&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">计划委托单触发后执行的订单类型，仅计划委托才有此字段</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;CreateTime&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单创建时间精确到毫秒(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;State&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单状态(Int)</span></span>\n<span class="line"><span style="color:#000000;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="创建限价单-createlimitpriceorder" tabindex="-1"><a class="header-anchor" href="#创建限价单-createlimitpriceorder" aria-hidden="true">#</a> 创建限价单(CreateLimitPriceOrder)</h3><p>接口: <code>/SpotOrder/CreateLimitPriceOrder</code><br> 请求方式: <code>POST</code><br> 参数列表: <br></p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>TradeSymbol</td><td>String</td><td>交易对名称, 例如: <code>BTC_USDT</code></td></tr><tr><td>Side</td><td>Int</td><td>交易方向, 1:买入 2:卖出</td></tr><tr><td>Amount</td><td>Float</td><td>数量</td></tr><tr><td>Price</td><td>Float</td><td>价格</td></tr></tbody></table><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">{</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;OrderId&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">订单Id(String)</span></span>\n<span class="line"><span style="color:#000000;">}</span></span>\n<span class="line"></span></code></pre></div><table><thead><tr><th>错误码</th><th>meesage</th><th>说明</th></tr></thead><tbody><tr><td>408</td><td>&quot;Open order num limit&quot;</td><td>未完成订单数量达到上限(普通用户所有交易对上限200)</td></tr></tbody></table><h3 id="创建ioc订单-createiocorder" tabindex="-1"><a class="header-anchor" href="#创建ioc订单-createiocorder" aria-hidden="true">#</a> 创建IOC订单(CreateIocOrder)</h3><p>接口: <code>/SpotOrder/CreateIocOrder</code><br> 请求方式: <code>POST</code><br> 参数列表: <br></p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>TradeSymbol</td><td>String</td><td>交易对名称, 例如: <code>BTC_USDT</code></td></tr><tr><td>Side</td><td>Int</td><td>交易方向, 1:买入 2:卖出</td></tr><tr><td>Amount</td><td>Float</td><td>数量</td></tr><tr><td>Price</td><td>Float</td><td>价格</td></tr></tbody></table><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">{</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;OrderId&quot;</span><span style="color:#CD3131;">：订单Id</span></span>\n<span class="line"><span style="color:#000000;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="创建fok订单-createfokorder" tabindex="-1"><a class="header-anchor" href="#创建fok订单-createfokorder" aria-hidden="true">#</a> 创建FOK订单(CreateFokOrder)</h3><p>接口: <code>/SpotOrder/CreateFokOrder</code><br> 请求方式: <code>POST</code><br> 参数列表: <br></p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>TradeSymbol</td><td>String</td><td>交易对名称, 例如: <code>BTC_USDT</code></td></tr><tr><td>Side</td><td>Int</td><td>交易方向, 1:买入 2:卖出</td></tr><tr><td>Amount</td><td>Float</td><td>数量</td></tr><tr><td>Price</td><td>Float</td><td>价格</td></tr></tbody></table><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">{</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;OrderId&quot;</span><span style="color:#CD3131;">：订单Id</span></span>\n<span class="line"><span style="color:#000000;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="创建计划委托单-createstoplimitorder" tabindex="-1"><a class="header-anchor" href="#创建计划委托单-createstoplimitorder" aria-hidden="true">#</a> 创建计划委托单(CreateStopLimitOrder)</h3><p>接口: <code>/SpotOrder/CreateStopLimitOrder</code><br> 请求方式: <code>POST</code><br> 参数列表: <br></p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>TradeSymbol</td><td>String</td><td>交易对名称, 例如: <code>BTC_USDT</code></td></tr><tr><td>Quote</td><td>Float</td><td>普通限价单为价格; 市价买为最大成交额; 市价卖为0</td></tr><tr><td>Base</td><td>Float</td><td>普通限价单为数量; 市价买为0; 市价卖为最大卖出数量</td></tr><tr><td>StopLimitType</td><td>Int</td><td>触发类型</td></tr><tr><td>StopLimitPrice</td><td>Float</td><td>触发价格</td></tr><tr><td>Side</td><td>Int</td><td>交易方向, 1:买入 2:卖出</td></tr><tr><td>OrderType</td><td>Int32</td><td>触发后订单执行类型</td></tr></tbody></table><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">{</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;OrderId&quot;</span><span style="color:#CD3131;">：订单Id</span></span>\n<span class="line"><span style="color:#000000;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="创建postonly限价单-createpostonlyorder" tabindex="-1"><a class="header-anchor" href="#创建postonly限价单-createpostonlyorder" aria-hidden="true">#</a> 创建postonly限价单(CreatePostOnlyOrder)</h3><p>接口: <code>/SpotOrder/CreatePostOnlyOrder</code><br> 请求方式: <code>POST</code><br> 参数列表: <br></p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>TradeSymbol</td><td>String</td><td>交易对名称, 例如: <code>BTC_USDT</code></td></tr><tr><td>Side</td><td>Int</td><td>交易方向, 1:买入 2:卖出</td></tr><tr><td>Amount</td><td>Float</td><td>数量</td></tr><tr><td>Price</td><td>Float</td><td>价格</td></tr></tbody></table><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">{</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;OrderId&quot;</span><span style="color:#CD3131;">：订单Id</span></span>\n<span class="line"><span style="color:#000000;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="创建市价单-createmarketpriceorder" tabindex="-1"><a class="header-anchor" href="#创建市价单-createmarketpriceorder" aria-hidden="true">#</a> 创建市价单(CreateMarketPriceOrder)</h3><p>接口: <code>/SpotOrder/CreateMarketPriceOrder</code><br> 请求方式: <code>POST</code><br> 参数列表: <br></p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>TradeSymbol</td><td>String</td><td>交易对名称, 例如: <code>BTC_USDT</code></td></tr><tr><td>Side</td><td>Int</td><td>交易方向, 1:买入 2:卖出</td></tr><tr><td>Amount</td><td>Float</td><td>最大成交数量[市价买为选填]</td></tr><tr><td>TotalSum</td><td>Float</td><td>最大成交额[市价卖为选填]</td></tr></tbody></table><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">{</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;OrderId&quot;</span><span style="color:#CD3131;">：订单Id</span></span>\n<span class="line"><span style="color:#000000;">}</span></span>\n<span class="line"></span></code></pre></div><p><strong>特殊说明</strong></p><ul><li>市价卖单可以只填TotalSum, 系统会冻结所有可用Base币种，并以不超过TotalSum的交易额为目标尽可能执行</li><li>市价买单可以只填Amount, 系统会冻结所有可用Quote币种，并以不超过Amount的数量为目标尽可能执行</li></ul><h3 id="批量创建订单-batchedcreateorders-仅限高级用户使用" tabindex="-1"><a class="header-anchor" href="#批量创建订单-batchedcreateorders-仅限高级用户使用" aria-hidden="true">#</a> 批量创建订单(BatchedCreateOrders)[仅限高级用户使用]</h3><p>接口: <code>/SpotOrder/BatchedCreateOrders</code><br> 请求方式: <code>POST</code><br> 参数列表:</p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>TradeSymbol</td><td>String</td><td>交易对名称, 例如: <code>BTC_USDT</code></td></tr><tr><td>OrderType</td><td>Int</td><td>订单类型[仅限普通限价单和PostOnly限价单]</td></tr><tr><td>OrderData</td><td>String</td><td>批量订单参数组合数据，订单的不同参数以英文逗号分隔，不同订单信息使用英文竖线分隔[批量创建订单所有参数都为必填参数]</td></tr></tbody></table><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">{</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;SuccessList&quot;</span><span style="color:#CD3131;">：创建成功的订单Id列表</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#CD3131;">[</span></span>\n<span class="line"><span style="color:#000000;">\t\t</span><span style="color:#CD3131;">Order</span><span style="color:#000000;"> </span><span style="color:#CD3131;">Id(String),</span></span>\n<span class="line"><span style="color:#000000;">\t\t</span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#CD3131;">]</span></span>\n<span class="line"><span style="color:#000000;">}</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div><p>备注:</p><ul><li>批量创建订单时，一次最多<code>100</code>个订单并依次处理，如果遇到任意订单执行失败，则立即停止处理</li><li>批量创建限价订单格式为: <code>{Side},{Amount},{Price}|{Side},{Amount},{Price}</code></li></ul><h3 id="取消订单-cancelorder" tabindex="-1"><a class="header-anchor" href="#取消订单-cancelorder" aria-hidden="true">#</a> 取消订单(CancelOrder)</h3><p>接口: <code>/SpotOrder/CancelOrder</code><br> 请求方式: <code>POST</code><br> 参数列表: <br></p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>TradeSymbol</td><td>String</td><td>交易对名称, 例如: <code>BTC_USDT</code></td></tr><tr><td>OrderId</td><td>String</td><td>订单Id</td></tr></tbody></table><p>返回值: <code>无</code></p><h3 id="批量取消订单-batchedcancelorders-仅限高级用户使用" tabindex="-1"><a class="header-anchor" href="#批量取消订单-batchedcancelorders-仅限高级用户使用" aria-hidden="true">#</a> 批量取消订单(BatchedCancelOrders)[仅限高级用户使用]</h3><p>接口: <code>/SpotOrder/BatchedCancelOrders</code><br> 请求方式: <code>POST</code><br> 参数列表: <br></p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>TradeSymbol</td><td>String</td><td>交易对名称, 例如: <code>BTC_USDT</code></td></tr><tr><td>OrderId</td><td>String</td><td>订单Id列表, 使用英文竖线</td></tr></tbody></table><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">{</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;SuccessCount&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">成功处理个数</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;FailList&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">失败的订单Id列表</span></span>\n<span class="line"><span style="color:#000000;">\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t</span><span style="color:#CD3131;">Order</span><span style="color:#000000;"> </span><span style="color:#CD3131;">Id(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t</span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">\t]</span></span>\n<span class="line"><span style="color:#000000;">}</span></span>\n<span class="line"></span></code></pre></div><p>备注:</p><ul><li>批量取消订单将依次处理所有取消订单请求, 遇到执行失败, 会<strong>跳过</strong>继续处理<br></li></ul><h3 id="取消所有订单-cancelallorders" tabindex="-1"><a class="header-anchor" href="#取消所有订单-cancelallorders" aria-hidden="true">#</a> 取消所有订单(CancelAllOrders)</h3><p>接口: <code>/SpotOrder/CancelAllOrders</code><br> 请求方式: <code>POST</code><br> 参数列表:</p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>TradeSymbol</td><td>String</td><td>交易对名称, 例如: <code>BTC_USDT</code></td></tr></tbody></table><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">{</span></span>\n<span class="line"><span style="color:#000000;">\t</span><span style="color:#0451A5;">&quot;SuccessCount&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">取消成功的订单数量</span></span>\n<span class="line"><span style="color:#000000;">}</span></span>\n<span class="line"></span></code></pre></div><p>备注:</p><ul><li>取消所有订单，但每次最多取消100条订单</li></ul>',83),l={render:function(s,t){return n}}}}]);