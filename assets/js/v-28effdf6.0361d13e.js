(self.webpackChunklnnapi=self.webpackChunklnnapi||[]).push([[984],{2412:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>l});const l={key:"v-28effdf6",path:"/zh-cn/http/common.html",title:"其它公共信息模块(common)",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"获取现货交易对基础信息(SymbolInfo)",slug:"获取现货交易对基础信息-symbolinfo",children:[]},{level:3,title:"OrderBook数据",slug:"orderbook数据",children:[]},{level:3,title:"K线数据(KLine)",slug:"k线数据-kline",children:[]}],filePathRelative:"zh-cn/http/common.md",git:{updatedTime:1625035966e3,contributors:[{name:"Lawetis-Lee",email:"es6china@163.com",commits:2},{name:"397702186@qq.com",email:"397702186@qq.com",commits:1}]}}},4856:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>o});const l=(0,a(6252).uE)('<h1 id="其它公共信息模块-common" tabindex="-1"><a class="header-anchor" href="#其它公共信息模块-common" aria-hidden="true">#</a> 其它公共信息模块(common)</h1><h3 id="获取现货交易对基础信息-symbolinfo" tabindex="-1"><a class="header-anchor" href="#获取现货交易对基础信息-symbolinfo" aria-hidden="true">#</a> 获取现货交易对基础信息(SymbolInfo)</h3><p>接口地址: <code>https://common.lnncoin.io/SymbolInfo</code><br> 请求方式: <code>GET</code><br> 参数列表:</p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>MarketType</td><td>String</td><td>现货市场固定为<code>Spot</code></td></tr></tbody></table><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">{</span></span>\n<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;Symbols&quot;</span><span style="color:#000000;">: [</span></span>\n<span class="line"><span style="color:#000000;">        {</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;Symbol&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">交易对名称(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;SymbolId&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">交易对ID(Int</span><span style="color:#098658;">32</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;QuoteMinNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Quote最小精度(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;BaseMinNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Base最小精度(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;IfForbidTrade&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">是否禁止交易(Bool:</span><span style="color:#000000;"> </span><span style="color:#CD3131;">禁止true</span><span style="color:#000000;">, </span><span style="color:#CD3131;">允许false)</span></span>\n<span class="line"><span style="color:#000000;">        },</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">     ]</span></span>\n<span class="line"><span style="color:#000000;">     </span><span style="color:#A31515;">&quot;Coins&quot;</span><span style="color:#CD3131;">:</span><span style="color:#000000;"> [</span></span>\n<span class="line"><span style="color:#000000;">        {</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;CoinName&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">币种名称(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;CanWithdraw&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">是否能够提现(Int</span><span style="color:#098658;">8</span><span style="color:#CD3131;">:</span><span style="color:#000000;"> </span><span style="color:#CD3131;">禁止</span><span style="color:#000000;"> </span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#CD3131;">允许</span><span style="color:#000000;"> </span><span style="color:#CD3131;">1),</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;CanDeposit&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">是否能够充值(Int</span><span style="color:#098658;">8</span><span style="color:#CD3131;">:</span><span style="color:#000000;"> </span><span style="color:#CD3131;">禁止</span><span style="color:#000000;"> </span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#CD3131;">允许</span><span style="color:#000000;"> </span><span style="color:#CD3131;">1),</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;CanTransfer&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">是否能够转账(Int</span><span style="color:#098658;">8</span><span style="color:#CD3131;">：禁止</span><span style="color:#000000;"> </span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#CD3131;">允许</span><span style="color:#000000;"> </span><span style="color:#CD3131;">1),</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;CoinId&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">币种Id(Int</span><span style="color:#098658;">32</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;Desc&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">币种描述(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;WithdrawFee&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">提现手续费(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;MinDepositNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">最小充值金额(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;MinOperateNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">最小操作数(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;MinWithdrawNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">最小提现数量(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span></span>\n<span class="line"><span style="color:#000000;">        },</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">     ]</span></span>\n<span class="line"></span></code></pre></div><h3 id="orderbook数据" tabindex="-1"><a class="header-anchor" href="#orderbook数据" aria-hidden="true">#</a> OrderBook数据</h3><p>接口地址: <code>https://common.lnncoin.io/OrderBook</code><br> 请求方式: <code>GET</code><br> 参数列表:</p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>MarketType</td><td>String</td><td>现货市场固定为<code>Spot</code></td></tr><tr><td>Symbol</td><td>String</td><td>交易对名称，例如<code>BTC_USDT</code></td></tr></tbody></table><p>响应数据解码:</p><ul><li>响应数据需要先经过<code>base64</code>解码，再用标准<code>zlib</code>解压缩得到<code>json</code>数据</li></ul><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">    {</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;Channel&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;SpotOrderBook&quot;</span><span style="color:#000000;">, </span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;Nonce&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">消息唯一编号(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t</span><span style="color:#0451A5;">&quot;Symbol&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">交易对名称(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t</span><span style="color:#0451A5;">&quot;Data&quot;</span><span style="color:#000000;">:</span></span>\n<span class="line"><span style="color:#000000;">\t\t{</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;ts&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">时间戳精确到毫秒(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#A31515;">&quot;Bids&quot;</span><span style="color:#CD3131;">:</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">价格(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">数量(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">\t</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t],</span></span>\n<span class="line"><span style="color:#000000;">                </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t],</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;Asks&quot;</span><span style="color:#000000;">:</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">价格(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">数量(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">\t</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t],</span></span>\n<span class="line"><span style="color:#000000;">                </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t]</span></span>\n<span class="line"><span style="color:#000000;">\t\t}</span></span>\n<span class="line"><span style="color:#000000;">    }</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div><h3 id="k线数据-kline" tabindex="-1"><a class="header-anchor" href="#k线数据-kline" aria-hidden="true">#</a> K线数据(KLine)</h3><p>接口地址: <code>https://common.lnncoin.io/KLine</code><br> 请求方式: <code>GET</code><br> 参数列表:</p><table><thead><tr><th>参数名</th><th>类型</th><th>参数说明</th></tr></thead><tbody><tr><td>MarketType</td><td>String</td><td>现货市场固定为<code>Spot</code></td></tr><tr><td>Symbol</td><td>String</td><td>交易对名称, 例如<code>BTC_USDT</code></td></tr><tr><td>KLineType</td><td>String</td><td>K线类型, 按照不同周期可取值:<code>1Min</code>, <code>5Min</code>, <code>15Min</code>, <code>30Min</code>, <code>1Hour</code>, <code>4Hour</code>, <code>24Hour</code>, <code>1Week</code>, <code>1Month</code></td></tr></tbody></table><p>响应数据解码:</p><ul><li>响应数据需要先经过<code>base64</code>解码，再用标准<code>zlib</code>解压缩得到<code>json</code>数据</li></ul><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">    {  </span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">DataType</span><span style="color:#000000;">: </span><span style="color:#CD3131;">K线类型(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">Nonce</span><span style="color:#000000;">: </span><span style="color:#CD3131;">消息唯一编号(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">Symbol</span><span style="color:#000000;">: </span><span style="color:#CD3131;">交易对名称(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">IsUpdate</span><span style="color:#000000;">: </span><span style="color:#CD3131;">固定为false</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">Data</span><span style="color:#000000;">: [</span></span>\n<span class="line"><span style="color:#000000;">            [</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">时间戳(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">交易次数(Int</span><span style="color:#098658;">32</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">交易量(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">交易额(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">开盘价(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">收盘价(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">最高价(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">最低价(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span></span>\n<span class="line"><span style="color:#000000;">            ],</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">        ]</span></span>\n<span class="line"><span style="color:#000000;">    }</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div>',20),o={render:function(s,n){return l}}}}]);