;(function(){
    "use strict";

    $(function(){
        var newsku = new initsku(sku);
        newsku.init();
    });

    var SKUResult = {},//保存最后的组合结果信息
        defaultstock,//保存默认库存
        defauktprice,//保存默认原价
        defauktdiscountprice//保存默认折扣价格

    //获取字节数
    function len(s){
        var l=0;
        var a=s.split("");
        for(var i=0;i<a.length;i++){
            if(a[i].charCodeAt(0)<299){
                l++;    
            }else{
                l+=2;
            }
        }
        return l;
    }   

    /*
     *得到从m元素中取n元素的所有组合
     *结果为[0,1...]形式的数组,1表示选中,0表示不选
     */
     function getCombFlags(m,n){
        if(!n || n < 1){
            return [];
        }


        var aResult = [];
        var aFlag = [];
        var bNext = true;
        var i,j,iCnt1;

        for(i = 0;i < m;i++){
            aFlag[i] = i < n ? 1 : 0;
        }

        aResult.push(aFlag.concat());

        while(bNext){
            iCnt1 = 0;
            for(i = 0;i < m - 1;i++){
                if(aFlag[i] == 1 && aFlag[i+1] == 0){
                    for(j = 0;j < i;j++){
                        aFlag[j] = j < iCnt1 ? 1 : 0;
                    }
                    aFlag[i] = 0;
                    aFlag[i+1] = 1;
                    var aTmp = aFlag.concat();
                    aResult.push(aTmp);
                    if(aTmp.slice(-n).join("").indexOf('0') == -1){
                        bNext = false;
                    }
                    break;
                }
                aFlag[i] == 1 && iCnt1++;
            }
        }
        return aResult;
     }


    /*
     *从数组中生成指定长度的组合
     *方法：先生成[0,1...]形式的数组，然后根据0,1从原数组取元素,得到组合数组    
     */
    function combInArray(aData){
        if(!aData || !aData.length){
            return [];
        }

        var len = aData.length;
        var aResult = [];

        for(var n=1;n<len;n++){
            var aaFlags = getCombFlags(len,n);
            while(aaFlags.length){
                var aFlags = aaFlags.shift();
                var aComb = [];
                for(var i=0;i<len;i++){
                    aFlags[i] && aComb.push(aData[i]);
                }
                aResult.push(aComb);
            }
        }

        return aResult;
    }
    

    function initsku(jsonobj, opt) {
        this.option = opt === void 0 ? "" : opt;
        this.sku = jsonobj;
        //console.log(this.sku)
        this.s_detail = this.sku.detail;
        this.s_attr = this.sku.attr;        
    }
    initsku.prototype = {
        defaults: {
            sort: ".sku-content",
            sortelem: ".sku",
            kaluliprice: "#kaluliPrice",
            originalPrice: "#originalPrice",
            stock: "#stock",
            select: "cur",
            unbindselect:'unclick'
        },
        init: function() {
            var t = this,                
            defaultkaluliprice = $(t.defaults.kaluliprice).text(),
            defaultprice = $(t.defaults.originalPrice).text(),
            defaultstock = $(t.defaults.stock).text();
            
            $.extend(t.defaults, t.option);
            t.doResult();
            t.creatsort();            
            $(t.defaults.sortelem).each(function() {
                var self = $(this);
                var attr_id = self.attr('data-value');
                if (!SKUResult[attr_id]) {
                    self.addClass(t.defaults.unbindselect);
                }
            }).live("click",function(){
                var self = $(this),
                    userselectnum = parseInt($("#numbox-text").attr("value"));
                if(self.hasClass(t.defaults.unbindselect)){
                    return false
                }
                //$(".error-msg .busnum").removeClass("show");
                $(".error-msg-sku").removeClass("show");                
                //选中自己，兄弟节点取消选中
                self.toggleClass(t.defaults.select).siblings().removeClass(t.defaults.select);

                //已经选择的节点
                var selectedObjs = $('.'+t.defaults.select);
                if (selectedObjs.length) {
                    //获得组合key价格
                    var selectedIds = [];
                    selectedObjs.each(function() {
                        selectedIds.push($(this).attr('data-value'));
                    });
                    selectedIds.sort(function(value1, value2) {
                        return parseInt(value1) - parseInt(value2);
                    });

                    var len = selectedIds.length;                    
                    var prices = SKUResult[selectedIds.join(';')].prices;
                    var maxPrice = Math.max.apply(Math, prices);
                    var minPrice = Math.min.apply(Math, prices);
                    var discountPrice = SKUResult[selectedIds.join(';')].discountPrices;
                    var discountmaxPrice = Math.max.apply(Math, discountPrice);
                    var discountminPrice = Math.min.apply(Math, discountPrice);
                    var stocks = SKUResult[selectedIds.join(';')].stock;
                    var itemId = SKUResult[selectedIds.join(';')].itemId;
                    var skuId = SKUResult[selectedIds.join(';')].skuId;
                    var status = SKUResult[selectedIds.join(';')].status;                    

                    userselectnum > stocks && stocks != 0? $(".error-msg .busnum").addClass("show") : $(".error-msg .busnum").removeClass("show");

                    $(t.defaults.stock).text(stocks);
                    $(t.defaults.originalPrice).text(maxPrice > minPrice ? minPrice + "-" + maxPrice : maxPrice);
                    $(t.defaults.kaluliprice).text(discountmaxPrice > discountminPrice ? discountminPrice + "-" + discountmaxPrice : discountmaxPrice);
                    $(t.defaults.sort).attr("data-itemid",itemId);
                    $(t.defaults.sort).attr("data-skuid",skuId);
                    $(t.defaults.sort).attr("data-status",status);

                    //用已选中的节点验证待测试节点 underTestObjs
                    $(t.defaults.sortelem).not(selectedObjs).not(self).each(function() {
                        var siblingsSelectedObj = $(this).siblings('.'+t.defaults.select);
                        var testAttrIds = []; //从选中节点中去掉选中的兄弟节点
                        if (siblingsSelectedObj.length) {
                            var siblingsSelectedObjId = siblingsSelectedObj.attr('data-value');
                            for (var i = 0; i < len; i++) {
                                (selectedIds[i] != siblingsSelectedObjId) && testAttrIds.push(selectedIds[i]);
                            }
                        } else {
                            testAttrIds = selectedIds.concat();
                        }
                        testAttrIds = testAttrIds.concat($(this).attr('data-value'));
                        testAttrIds.sort(function(value1, value2) {
                            return parseInt(value1) - parseInt(value2);
                        });
                        if (!SKUResult[testAttrIds.join(';')]) {
                            $(this).addClass(t.defaults.unbindselect).removeClass(t.defaults.select);
                        } else {
                            $(this).removeClass(t.defaults.unbindselect);
                        }
                    });
                } else {
                    //设置默认属性                
                    $(t.defaults.originalPrice).text(defaultprice);
                    $(t.defaults.kaluliprice).text(defaultkaluliprice);
                    $(t.defaults.stock).text(defaultstock);                    
                    $(t.defaults.sort).attr("data-itemid","");
                    $(t.defaults.sort).attr("data-skuid","");
                    $(t.defaults.sort).attr("data-status","");

                    //设置属性状态
                    $(t.defaults.sortelem).each(function() {
                        SKUResult[$(this).attr('data-value')] ? $(this).removeClass(t.defaults.unbindselect) : $(this).addClass(t.defaults.unbindselect).removeClass(t.defaults.select);
                    });
                }

                if( $(t.defaults.stock).text() == 0 ||  $(t.defaults.sort).attr("data-status") == 1){
                    $(".cart-btn,.buy-btn").hide();
                    $(".none-btn").css("display","block");
                }else{
                    $(".none-btn").hide();
                    $(".buy-btn,.cart-btn").css("display","block");
                }
                if($(t.defaults.sort).attr("data-status") == 1){
                    $("#stock").text(0)
                }
            })
        },
        creatsort: function() {
            var t = this,
                dom = "";                       
            $.each(t.s_attr, function(i, item) {               
                var thisitem = t.s_attr[i],
                    itemhead = len(thisitem.name) > 9 ?  thisitem.name.substring(0,9) : thisitem.name,
                    l = 0;      
                    
                //console.log(i,item);                
                dom += '<div class="grid sort">';
                dom += '<div class="title">' + itemhead + '</div>';
                dom += '<ul class="clearfix">';
                for (var key in thisitem.data) {                   
                    dom += '<li class="sku" data-value=' + thisitem.data[key].alias + '>' + thisitem.data[key].name + '</li>';
                    l++;
                }
                dom += '</ul>';
                dom += '</div>';
            });
            var count = 0,defaultstatus;
            $.each(t.s_detail,function(i,item){
                count++;
                defaultstatus = t.s_detail[i].status;                
            });
            
            if(count == 1 && defaultstatus == 1){
                $("#stock").text(0);
                $(".buy-btn,.cart-btn").hide();
                $(".none-btn").css("display","block");
            }             
            
            $(t.defaults.sort).append(dom);          
        },
        doResult: function() { //初始化得到结果集
            var t = this;
            var i, j, skuKeys = t.getObjKeys(t.s_detail);
            for (i = 0; i < skuKeys.length; i++) {
                var skuKey = skuKeys[i]; //一条SKU信息key
                var sku = t.s_detail[skuKey]; //一条SKU信息value
                var skuKeyAttrs = skuKey.split(";"); //SKU信息key属性值数组

                skuKeyAttrs.sort(function(value1, value2) {
                    return parseInt(value1) - parseInt(value2);
                });

                //对每个SKU信息key属性值进行拆分组合
                var combArr = combInArray(skuKeyAttrs);

                for (j = 0; j < combArr.length; j++) {
                    t.add2SKUResult(combArr[j], sku);
                }

                //结果集接放入SKUResult
                SKUResult[skuKeyAttrs.join(";")] = {
                    stock: sku.stock,
                    prices: [sku.price],
                    discountPrices: [sku.discountPrice],
                    status: sku.status,
                    itemId: sku.itemId,
                    skuId: sku.skuId
                }                
            }
        },
        getObjKeys: function(obj) { //获得对象的key
            if (obj !== Object(obj)) throw new TypeError('Invalid object');
            var keys = [];
            for (var key in obj)
                if (Object.prototype.hasOwnProperty.call(obj, key))
                    keys[keys.length] = key;
            return keys;
        },
        add2SKUResult: function(combArrItem, sku) { //把组合的key放入结果集SKUResult
            var key = combArrItem.join(";");
            if (SKUResult[key]) { //SKU信息key属性                
                SKUResult[key].stock = parseInt(SKUResult[key].stock) + parseInt(sku.stock);
                SKUResult[key].prices.push(sku.price);
                SKUResult[key].discountPrices.push(sku.discountPrice);                
            } else {
                SKUResult[key] = {
                    stock: sku.stock,
                    prices: [sku.price],
                    discountPrices: [sku.discountPrice],
                    status: sku.status,
                    itemId: sku.itemId,
                    skuId: sku.skuId
                };
            }
        }
    };

})();