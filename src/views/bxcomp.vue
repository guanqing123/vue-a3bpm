<template>
    <!--<div>-->
        <!--报销:{{$route.params.todo}}-->
    <!--</div>-->
    <div id="bxcomp">
        <div class="buttons-tab">
            <button :class="['tab-link', 'button', {active: active==='tab1'}]" @click="toggle('tab1')">申请信息</button>
            <button :class="['tab-link', 'button', {active: active==='tab2'}]" @click="toggle('tab2')">流程</button>
            <button :class="['tab-link', 'button', {active: active==='tab3'}]" @click="toggle('tab3')">审批</button>
        </div>
        <input type="hidden" id="sqbmbh" value=""/>
        <input type="hidden" id="ShenQingJE" value=""/>
        <input type="hidden" id="bxlx" value=""/>
        <div class="tabContent">
            <div class="tabs">
                <div id="tab1" :class="['tab', {active: active==='tab1'}]">
                    <div class="content-block">
                        <div class="list-block">
                            <ul>
                                <li class="item-content">
                                    <div class="item-inner">
                                        <div class="item-title sqbt"></div>
                                        <div class="item-after">申请金额<span class="sqje"></span></div>
                                    </div>
                                </li>
                                <li class="item-content">
                                    <div class="item-inner">
                                        <div class="item-title"><span class="DanWeiMC"></span>><span class="BuMenMC"></span></div>
                                        <div class="item-after bxr"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="content-block-title">基本信息</div>
                        <div class="list-block">
                            <ul>
                                <li>
                                    <div class="item-content">
                                        <div class="item-media"><i class="icon icon-form-email"></i></div>
                                        <div class="item-inner">
                                            <div class="item-title label">指标名称</div>
                                            <div class="item-input">
                                                <span class="zbmc"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="item-content">
                                        <div class="item-media"><i class="icon icon-form-email"></i></div>
                                        <div class="item-inner">
                                            <div class="item-title label">可用余额</div>
                                            <div class="item-input">
                                                <span class="kyye"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="item-content">
                                        <div class="item-media"><i class="icon icon-form-email"></i></div>
                                        <div class="item-inner">
                                            <div class="item-title label">报销部门</div>
                                            <div class="item-input">
                                                <span class="bxbm"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="item-content">
                                        <div class="item-media"><i class="icon icon-form-email"></i></div>
                                        <div class="item-inner">
                                            <div class="item-title label">报销人</div>
                                            <div class="item-input">
                                                <span class="bxr"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="align-top">
                                    <div class="item-content">
                                        <div class="item-media"><i class="icon icon-form-comment"></i></div>
                                        <div class="item-inner">
                                            <div class="item-title label">报销是由</div>
                                            <div class="item-input">
                                                <textarea class="bxsy" readonly></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="content-block-title">支出信息</div>
                        <div class="list-block">
                            <ul>
                                <li>
                                    <div class="item-content">
                                        <div class="item-media"><i class="icon icon-form-email"></i></div>
                                        <div class="item-inner">
                                            <div class="item-title label">指标名称</div>
                                            <div class="item-input">
                                                <span class="zbmc"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="item-content">
                                        <div class="item-media"><i class="icon icon-form-email"></i></div>
                                        <div class="item-inner">
                                            <div class="item-title label">支出事项</div>
                                            <div class="item-input">
                                                <span class="zcsx"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="item-content">
                                        <div class="item-media"><i class="icon icon-form-email"></i></div>
                                        <div class="item-inner">
                                            <div class="item-title label">报销金额</div>
                                            <div class="item-input">
                                                <span class="bxje"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="content-block-title">支出明细</div>
                        <div class="list-block">
                            <ul id="zcmx">

                            </ul>
                        </div>
                        <div class="content-block-title">结算信息</div>
                        <div class="list-block">
                            <ul>
                                <li>
                                    <div class="item-content">
                                        <div class="item-media"><i class="icon icon-form-email"></i></div>
                                        <div class="item-inner">
                                            <div class="item-title label">结算金额</div>
                                            <div class="item-input">
                                                <span class="bxje"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="content-block-title djfj">单据附件</div>
                        <div class="list-block">
                            <ul class="fjLists">
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="tab2" :class="['tab', {active: active==='tab2'}]">
                    <div class="content-block">
                        <p class="img"><img src=""/></p>
                    </div>
                </div>
                <div id="tab3" :class="['tab', {active: active==='tab3'}]" style="padding-bottom:55px;">
                    <div class="content-block">
                        <div class="weui-cells weui-cells_form spyj">
                            <div class="weui-cell">
                                <div class="weui-cell__bd">
                                    <textarea id="option" class="weui-textarea" placeholder="请输入审批意见" rows="5"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="list-block">
                            <ul class="ysXX">
                                <!--<li>
                                    <div class="item-content">
                                        <div class="item-media"><i class="icon icon-form-gender"></i></div>
                                        <div class="item-inner">
                                            <div class="item-title label">符合单位财务规定</div>
                                            <div class="item-input">
                                                <select>
                                                    <option>是</option>
                                                    <option>否</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </li>-->
                            </ul>
                        </div>
                        <div class="scfj">
                            <div class="content-block-title">上传附件</div>
                            <div class="weui-gallery" id="gallery">
                                <div class="weui-closed">
                                    <span>关闭</span>
                                </div>
                                <img style="-webkit-touch-callout:default;" class="weui-gallery__img" id="galleryImg"/>
                                <!--<div class="weui-gallery__opr">
                                    <a href="javascript:" class="weui-gallery__del">
                                        <i class="weui-icon-delete weui-icon_gallery-delete"></i>
                                    </a>
                                </div>-->
                            </div>
                            <div class="weui-cells weui-cells_form">
                                <div class="weui-cell">
                                    <div class="weui-cell__bd">
                                        <div class="weui-uploader">
                                            <div class="weui-uploader__bd">
                                                <ul class="weui-uploader__files" id="uploaderFiles">
                                                </ul>
                                                <div class="weui-uploader__input-box">
                                                    <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content-block-title">审批过程</div>
                        <div class="spFjLists">
                            <div class="list-block">
                                <!--<div class="weui-cells weui-cells_form">
                                    <div class="weui-cell">
                                        <div class="weui-cell__bd">
                                            <textarea style="height:3rem;" class="weui-textarea" rows="3">同意</textarea>
                                            <div class="weui-textarea-counter"><span>张三</span></div>
                                            <div class="weui-textarea-counter clearfix"><label class="fl">审批时长：即时</label><time class="fr">2019-06-13</time></div>
                                        </div>
                                    </div>
                                </div>
                                <ul class="ysValue">
                                    <li>
                                        <div class="item-content">
                                            <div class="item-media"><i class="icon icon-form-email"></i></div>
                                            <div class="item-inner">
                                                <div class="item-title label">要素1</div>
                                                <div class="item-input">
                                                    <span class="zcsx">123</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div class="item-content">
                                            <div class="item-media"><i class="icon icon-form-email"></i></div>
                                            <div class="item-inner">
                                                <a class="colorBlue" href="http://119.18.195.153:8088/bpm/image//upload/zhijiebx/1560396568264/FJ20190613000013.pdf" download="">流程配置手册.pdf</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>-->
                            </div>
                        </div>
                        <div class="fixBottom">
                            <div class="weui-flex">
                                <div class="weui-flex__item"><a id="submit" href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">审核通过</a></div>
                                <div class="weui-flex__item"><a id="back" href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">退回</a></div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bxcomp",
        beforeRouteEnter (to, from, next) {
            next(vm => {
                console.log('todo before enter, vm.$route > ' + JSON.stringify(vm.$route.params.todo))
            })
        },
        data() {
           return {
               active: "tab1"
           }
        },
        methods: {
            toggle(active) {
                this.active = active
            }
        }
    }
</script>

<style lang="css" scoped>
    @import "../assets/styles/sm.css";
    .weui-btn_mini {
        display: inline-block;
        padding: 0 2.32em;
        line-height: 3;
        font-size: 14px;
    }
    .tab{
        padding-top:20px;
    }
    .weui-flex{
        text-align: center;
        margin-top: 6px;
    }
    .weui-gallery__img{
        width:80%;
        top:50%;
        left:50%;
    }
    .weui-closed{
        width:95%;
        margin-top:5%;
        text-align: right;
    }
    .weui-closed span{
        color:#fff;
        font-size:14px;
    }
    .tabContent{
        height:100%;
        overflow: scroll;
    }
</style>