(self.webpackChunklnnapi=self.webpackChunklnnapi||[]).push([[290],{8205:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>o});const o={key:"v-2eec4bc0",path:"/http/common.html",title:"Common",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:3,title:"SymbolInfo(Retrieve spot symbol pair basic info)",slug:"symbolinfo-retrieve-spot-symbol-pair-basic-info",children:[]},{level:3,title:"OrderBook",slug:"orderbook",children:[]},{level:3,title:"KLine",slug:"kline",children:[]}],filePathRelative:"http/common.md",git:{updatedTime:1625035966e3,contributors:[{name:"Lawetis-Lee",email:"es6china@163.com",commits:2},{name:"397702186@qq.com",email:"397702186@qq.com",commits:1}]}}},826:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>l});const o=(0,a(6252).uE)('<h1 id="common" tabindex="-1"><a class="header-anchor" href="#common" aria-hidden="true">#</a> Common</h1><h3 id="symbolinfo-retrieve-spot-symbol-pair-basic-info" tabindex="-1"><a class="header-anchor" href="#symbolinfo-retrieve-spot-symbol-pair-basic-info" aria-hidden="true">#</a> SymbolInfo(Retrieve spot symbol pair basic info)</h3><p>Interface address: <code>https://common.lnncoin.io/SymbolInfo</code><br> Method: <code>GET</code><br> Parameter:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Explain</th></tr></thead><tbody><tr><td>MarketType</td><td>String</td><td><code>Spot</code></td></tr></tbody></table><p>Response:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">{</span></span>\n<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;Symbols&quot;</span><span style="color:#000000;">: [</span></span>\n<span class="line"><span style="color:#000000;">        {</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;Symbol&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Symbol</span><span style="color:#000000;"> </span><span style="color:#CD3131;">name(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;SymbolId&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Symbol</span><span style="color:#000000;"> </span><span style="color:#CD3131;">Id(Int</span><span style="color:#098658;">32</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;QuoteMinNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Quote</span><span style="color:#000000;"> </span><span style="color:#CD3131;">minimum</span><span style="color:#000000;"> </span><span style="color:#CD3131;">precision(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;BaseMinNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Base</span><span style="color:#000000;"> </span><span style="color:#CD3131;">minimum</span><span style="color:#000000;"> </span><span style="color:#CD3131;">precision(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;IfForbidTrade&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Indicate</span><span style="color:#000000;"> </span><span style="color:#CD3131;">whether</span><span style="color:#000000;"> </span><span style="color:#CD3131;">this</span><span style="color:#000000;"> </span><span style="color:#CD3131;">symobl</span><span style="color:#000000;"> </span><span style="color:#CD3131;">pair</span><span style="color:#000000;"> </span><span style="color:#CD3131;">is</span><span style="color:#000000;"> </span><span style="color:#CD3131;">forbidden</span><span style="color:#000000;"> </span><span style="color:#CD3131;">to</span><span style="color:#000000;"> </span><span style="color:#CD3131;">trade(Bool)</span></span>\n<span class="line"><span style="color:#000000;">        },</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">     ]</span></span>\n<span class="line"><span style="color:#000000;">     </span><span style="color:#A31515;">&quot;Coins&quot;</span><span style="color:#CD3131;">:</span><span style="color:#000000;"> [</span></span>\n<span class="line"><span style="color:#000000;">        {</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;CoinName&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Coin</span><span style="color:#000000;"> </span><span style="color:#CD3131;">name(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;CanWithdraw&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">(Int</span><span style="color:#098658;">8</span><span style="color:#CD3131;">:</span><span style="color:#000000;"> </span><span style="color:#CD3131;">Forbidden</span><span style="color:#000000;"> </span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#CD3131;">allowed</span><span style="color:#000000;"> </span><span style="color:#CD3131;">1),</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;CanDeposit&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">(Int</span><span style="color:#098658;">8</span><span style="color:#CD3131;">:</span><span style="color:#000000;"> </span><span style="color:#CD3131;">Forbidden</span><span style="color:#000000;"> </span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#CD3131;">allowed</span><span style="color:#000000;"> </span><span style="color:#CD3131;">1),</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;CanTransfer&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">(Int</span><span style="color:#098658;">8</span><span style="color:#CD3131;">：Forbidden</span><span style="color:#000000;"> </span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#CD3131;">allowed</span><span style="color:#000000;"> </span><span style="color:#CD3131;">1),</span><span style="color:#000000;"> </span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;CoinId&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Coin</span><span style="color:#000000;"> </span><span style="color:#CD3131;">Id(Int</span><span style="color:#098658;">32</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;Desc&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Coin</span><span style="color:#000000;"> </span><span style="color:#CD3131;">description(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;WithdrawFee&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;MinDepositNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Minimum</span><span style="color:#000000;"> </span><span style="color:#CD3131;">deposit</span><span style="color:#000000;"> </span><span style="color:#CD3131;">amount(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;MinOperateNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Minimum</span><span style="color:#000000;"> </span><span style="color:#CD3131;">operation</span><span style="color:#000000;"> </span><span style="color:#CD3131;">amount(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;MinWithdrawNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Minimum</span><span style="color:#000000;"> </span><span style="color:#CD3131;">withdrawal</span><span style="color:#000000;"> </span><span style="color:#CD3131;">amount(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span></span>\n<span class="line"><span style="color:#000000;">        },</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">     ]</span></span>\n<span class="line"></span></code></pre></div><h3 id="orderbook" tabindex="-1"><a class="header-anchor" href="#orderbook" aria-hidden="true">#</a> OrderBook</h3><p>Interface address: <code>https://common.lnncoin.io/OrderBook</code><br> Method: <code>GET</code><br> Parameter:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Expain</th></tr></thead><tbody><tr><td>MarketType</td><td>String</td><td><code>Spot</code></td></tr><tr><td>Symbol</td><td>String</td><td>Symbol name, eg. <code>BTC_USDT</code></td></tr></tbody></table><p>Decode the response data:</p><ul><li>Response data should be decoded by <code>base64</code> first, then decompressed by standard <code>zlib</code> to get final <code>json</code> data</li></ul><p>Response:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">    {</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;Channel&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;SpotOrderBook&quot;</span><span style="color:#000000;">, </span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;Nonce&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Unique</span><span style="color:#000000;"> </span><span style="color:#CD3131;">Id(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t</span><span style="color:#0451A5;">&quot;Symbol&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Symobl</span><span style="color:#000000;"> </span><span style="color:#CD3131;">name(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t</span><span style="color:#0451A5;">&quot;Data&quot;</span><span style="color:#000000;">:</span></span>\n<span class="line"><span style="color:#000000;">\t\t{</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;ts&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Timestamp</span><span style="color:#000000;"> </span><span style="color:#CD3131;">accurate</span><span style="color:#000000;"> </span><span style="color:#CD3131;">to</span><span style="color:#000000;"> </span><span style="color:#CD3131;">millisecond</span><span style="color:#000000;"> </span><span style="color:#CD3131;">(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#A31515;">&quot;Bids&quot;</span><span style="color:#CD3131;">:</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">Price(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">Amount(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">\t</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t],</span></span>\n<span class="line"><span style="color:#000000;">                </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t],</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;Asks&quot;</span><span style="color:#000000;">:</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">Price(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">Amount(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">\t</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t],</span></span>\n<span class="line"><span style="color:#000000;">                </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t]</span></span>\n<span class="line"><span style="color:#000000;">\t\t}</span></span>\n<span class="line"><span style="color:#000000;">    }</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div><h3 id="kline" tabindex="-1"><a class="header-anchor" href="#kline" aria-hidden="true">#</a> KLine</h3><p>Interface address: <code>https://common.lnncoin.io/KLine</code><br> Method: <code>GET</code><br> Parameter:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Explain</th></tr></thead><tbody><tr><td>MarketType</td><td>String</td><td><code>Spot</code></td></tr><tr><td>Symbol</td><td>String</td><td>Symbol name, eg. <code>BTC_USDT</code></td></tr><tr><td>KLineType</td><td>String</td><td>Type of KLine, can be one of: <code>1Min</code>, <code>5Min</code>, <code>15Min</code>, <code>30Min</code>, <code>1Hour</code>, <code>4Hour</code>, <code>24Hour</code>, <code>1Week</code>, <code>1Month</code></td></tr></tbody></table><p>Decode the response data:</p><ul><li>Response data should be decoded by <code>base64</code> first, then decompressed by standard <code>zlib</code> to get final <code>json</code> data</li></ul><p>Response:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">    {  </span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">DataType</span><span style="color:#000000;">: </span><span style="color:#CD3131;">(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">Nonce</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Unique</span><span style="color:#000000;"> </span><span style="color:#CD3131;">Id(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">Symbol</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Symobl</span><span style="color:#000000;"> </span><span style="color:#CD3131;">name(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">IsUpdate</span><span style="color:#000000;">: </span><span style="color:#0000FF;">false</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">Data</span><span style="color:#000000;">: [</span></span>\n<span class="line"><span style="color:#000000;">            [</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">Timestamp(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">Trade</span><span style="color:#000000;"> </span><span style="color:#CD3131;">count(Int</span><span style="color:#098658;">32</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">Amount(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">Volume(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">Open(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">Close(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">High(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">Low(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span></span>\n<span class="line"><span style="color:#000000;">            ],</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">        ]</span></span>\n<span class="line"><span style="color:#000000;">    }</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div>',20),l={render:function(s,n){return o}}}}]);