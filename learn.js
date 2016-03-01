/** ************************业务类型常量******************************** */

	var BUSI_OPPORTUNITY_ID = 11;			//商机
	var BUSI_OPPORTUNITY_CHANGE_ID = 12;	//商机变更
	var INTENT_ID = 21;// 意向
	var INTENT_CHANGE_ID = 22;// 意向变更
	var INTENT_DELAY_ID = 23;// 意向延期代办
	var SALESMANAGER_CHANGE_ID = 24;// 销售经理变更
	var HANDOVER_ID = 25;// 交接单
	
	// 项目相关--------------------------------------------
	var CONNECT_ITEM_ID = 31;// 交接单立项代办
	
	var ITEMCREATE_ID = 32;// 立项

	var PROJECTMANAGER_CHANGE_ID = 33;// 项目经理变更

	var ITEMCHANGE_ID = 34;// 项目变更

	var MILESTONE_WRITE_ID = 35;// 里程碑填报代办

	var MILESTONE_CONFIRM_ID = 36;// 里程碑确认代办
		
	var ITEM_SATISFACTION_ID = 37;// 项目满意度归档
	
	var ITEM_MAINTAIN_HANDOVER_ID = 38;//转维保交接表
	
	var ITEMEND_ID = 39;// 项目结项
	
	
	// 收支管理-----------------------------------------------
	var DEPOSITBOOK_ID = 51;// 存货入账

	var ESTRELEASE_ID = 52;// 冲暂估
		
	var INVOICE_ID = 53;// 入账开票

	var ESTINCOME_ID = 54;// 入暂估开票

	
	var ACCT_EXPLAIN4LE12MONTHS_ID = 61;// 应收款催款-账龄6个月以上并1年以内

	var ACCT_EXPLAIN4GT12MONTHS_ID = 62;// 应收款催款-账龄1年以上
		
	var ACCT_ATTACHMENT_ID = 63;// 应收款销售经理待办
		
	var ACCT_OTHERATTACHMENT_ID = 64;// 其他应收款销售经理待办
		
	var ACCT_OTHERATTACHMENT_SPLIT_ID = 65;// 其他应收账款拆分待办
	
	
	// 结算单 ----------------------------------------------------------------
	var PAYOFFBILL_ID = 71;// 结算单

	
	
	// 月计划--------------------------------------------------------
	var MONTH_DEPARTCHARGE_ID = 81;//月计划部门费用明细

	var MONTH_CAPEX_ID = 82;//月计划资本性支出明细

	var MONTH_OFFICEINVEST_ID = 83;//月计划行政办公投资明细
	
	var MONTH_ADVERTISINGCOST_ID = 84;//月计划宣传费用明细
	
	var MONTH_PROJECTACCUAL_ID = 87;//月计划项目权责收支明细

	var MONTH_PROJECTFUNDS_ID = 88;//月计划项目资金收支明细
	
	var MONTH_LABORCOST_ID = 91;//月计划人工成本费用明细

	var MONTH_OFFICECOST_ID = 92;//月计划办公维护费用明细

	var MONTH_FINANCIALCOST_ID = 93;//月计划财务费用明细

	var MONTH_OFFICECHARGE_TOTAL_ID = 96;//月计划行政办公费用汇总

	var MONTH_FINALCOST_ID = 99;//月计划总汇总
	
	
	var RETURNED_DRAFT = 2;//退回草稿
	
	var BRIEFRETURNED_DRAFT = 3;//简退草稿

/**=================================华丽分割线============================================**/

	//附件类型常量
	 /**意向文档类型*/
	var INTENT_MANAGE = 1;

	 /**意向上传会议纪要文档类型*/
	 var INTENT_UPLOADMEET = 3;

	 /**立项文档类型*/
	 var PROJECT_DELETE1 = 2;
	 
	 /**收支文档类型 */
	 var INVOICE_UPLOADTYPE = 4;
	 
	 /**项目文档类型*/
	 var ITEM_MANAGE = 5;
	 
	 /**交接单文档类型*/
	 var CONNECT_MANAGE = 6;
	 
	 /**预算表附件类型*/
	 var BUDGET_MANAGE = 7;

	 /**里程碑上传证明文件*/
	 var  MILESTONE_UPLOAD = 8;

	 /**项目评审附件*/
	 var ITEM_CHECK_MANAGE = 9;

	 /**上传软硬件中的软件*/
	 var SOFTWARE_UPLOAD = 10;
	 
	 /**上传软硬件中的硬件*/
	 var HARDWARE_UPLOAD = 11;
	 
	 /**收支文档存货入账类型 */
	 var  INVOICE_DEPOSITBOOK_UPLOADTYPE = 12;

	 /**收支文档存货入账审核类型 */
	 var  INVOICE_DEPOSITBOOK_CHECK_UPLOADTYPE = 13;
	 
	 /**收支文档入账开票类型 */
	 var  INVOICE_ACCOUNTINVOICE_UPLOADTYPE = 14;
	 
	 /**收支文档入账开票审核类型 */
	 var  INVOICE_ACCOUNTINVOICE_CHECK_UPLOADTYPE = 15;
	 
	 /**收支文档冲暂估类型 */
	 var  INVOICE_ESTIMATEDINCOME_UPLOADTYPE = 16;

	 /**收支文档入暂估开票类型 */
	 var  INVOICE_ESTIMATEDRELEASE_UPLOADTYPE = 17;
	 
	 /**收支文档入暂估开票审核类型 */
	 var  INVOICE_ESTIMATEDRELEASE_CHECK_UPLOADTYPE = 18;
	 
	 /**收支文档入暂估开票存货入账审核类型 */
	 var INVOICE_ESTIMATEDRELEASE_DEPOSITBOOK_CHECK_UPLOADTYPE = 19;
	 
	 /**项目满意度文档类型 */
	 var ITEM_SATISFACTION_UPLOADTYPE = 20;

	 /**综合统计项目管理表财务表类型 */
	 var ITEM_FINANCE_UPLOADTYPE = 21;

	 /** WBS 文件类型**/
	 var ITEM_WBS = 22;

	 /**管理成本表 附件类型**/
	 var  ACCT_RECEIVABLE=23;

	 /**催款材料**/
	 var  ACCT_EXPLAIN = 24;

	 /**其他应收账款 附件类型**/
	 var  ACCT_RECEIVABLE_OTHER=25;

	 /**其他应收销售已转其他保证金 附件类型**/
	 var  OTHERD_DEPOSITTRANSFERSUB=26;

	 /**项目变更上传会议纪要**/
	 var  ITEM_CHANGE_UPLOADMEET=27;
	 
	
/****==============================华丽分割线========================================================****/	 
	 var DOC_TYPE="*.doc;*.docx;*.xls;*.ppt;*.pdf;*.txt;*.html;*.zip;*.gif;*.jpg;*.png;*.psd;*.swf;*.bmp";//附件类型
/** ***************判断浏览器类型**************************************** */
	(function($, window, document,undefined){
	    if(!window.browser){
	         
	        var userAgent = navigator.userAgent.toLowerCase(),uaMatch;
	        window.browser = {};
	         
	        /**
	         * 判断是否为ie
	         */
	        function isIE(){
	            return ("ActiveXObject" in window);
	        }
	        /**
	         * 判断是否为谷歌浏览器
	         */
	        if(!uaMatch){
	            uaMatch = userAgent.match(/chrome\/([\d.]+)/);
	            if(uaMatch!=null){
	                window.browser['name'] = 'chrome';
	                window.browser['version'] = uaMatch[1];
	            }
	        }
	        /**
	         * 判断是否为火狐浏览器
	         */
	        if(!uaMatch){
	            uaMatch = userAgent.match(/firefox\/([\d.]+)/);
	            if(uaMatch!=null){
	                window.browser['name'] = 'firefox';
	                window.browser['version'] = uaMatch[1];
	            }
	        }
	        /**
	         * 判断是否为opera浏览器
	         */
	        if(!uaMatch){
	            uaMatch = userAgent.match(/opera.([\d.]+)/);
	            if(uaMatch!=null){
	                window.browser['name'] = 'opera';
	                window.browser['version'] = uaMatch[1];
	            }
	        }
	        /**
	         * 判断是否为Safari浏览器
	         */
	        if(!uaMatch){
	            uaMatch = userAgent.match(/safari\/([\d.]+)/);
	            if(uaMatch!=null){
	                window.browser['name'] = 'safari';
	                window.browser['version'] = uaMatch[1];
	            }
	        }
	        /**
	         * 最后判断是否为IE
	         */
	        if(!uaMatch){
	            if(userAgent.match(/msie ([\d.]+)/)!=null){
	                uaMatch = userAgent.match(/msie ([\d.]+)/);
	                window.browser['name'] = 'ie';
	                window.browser['version'] = uaMatch[1];
	            }else{
	                /**
	                 * IE10
	                 */
	                if(isIE() && !!document.attachEvent && (function(){"use strict";return !this;}())){
	                    window.browser['name'] = 'ie';
	                    window.browser['version'] = '10';
	                }
	                /**
	                 * IE11
	                 */
	                if(isIE() && !document.attachEvent){
	                    window.browser['name'] = 'ie';
	                    window.browser['version'] = '11';
	                }
	            }
	        }
	 
	        /**
	         * 注册判断方法
	         */
	        if(!$.isIE){
	            $.extend({
	                isIE:function(){
	                    return (window.browser.name == 'ie');
	                }
	            });
	        }
	        if(!$.isChrome){
	            $.extend({
	                isChrome:function(){
	                    return (window.browser.name == 'chrome');
	                }
	            });
	        }
	        if(!$.isFirefox){
	            $.extend({
	                isFirefox:function(){
	                    return (window.browser.name == 'firefox');
	                }
	            });
	        }
	        if(!$.isOpera){
	            $.extend({
	                isOpera:function(){
	                    return (window.browser.name == 'opera');
	                }
	            });
	        }
	        if(!$.isSafari){
	            $.extend({
	                isSafari:function(){
	                    return (window.browser.name == 'safari');
	                }
	            });
	        }
	    }
	})(jQuery, window, document);
/*******************************************************************************
 * @author lcn
 * 
 * @requires jQuery
 * 
 * 当页面加载完毕关闭加载进度
 ******************************************************************************/
$(window).load(function(){
	$("#loading").fadeOut();
});

/**
 * @author lcn
 * 
 * @requires jQuery
 * 
 * 防止退格键导致页面回退
 */
$(document).keydown(function (e) { 
	var doPrevent; 
	if (e.keyCode == 8) { 
		var d = e.srcElement || e.target; 
		if (d.tagName.toUpperCase() == 'INPUT' || d.tagName.toUpperCase() == 'TEXTAREA') { 
			doPrevent = d.readOnly || d.disabled; 
		}else{
			doPrevent = true; 
		}
	}else{ 
		doPrevent = false; 
	}
	if (doPrevent) 
	e.preventDefault(); 
});

function trim() {

    return this.replace(/(^\s*)|(\s*$)/g,'');
}
/**
 * @author lcn
 * 
 * @requires jQuery
 * 
 * 新增和修改用户信息时绑定下拉框内容（用户类型下拉列表）
 */
var pubMethod = {
    bind: function (control,code) {
        if (control == ''|| code == '')
        {
            return;
        }
        $('#'+ control).combobox({
            url: '${ctx}/dictionary/combox?code=' + code,
            method: 'get',
            valueField: 'id',
            textField: 'text',
            editable: false,
            panelHeight: 'auto',
            required:true
        });
    }
};
/**
 * 
 * 生成 审阅历史记录
 * 
 * @param array
 */
function generateAudiHis2(hisdataGrid,baseurl,busiId,busiType,status){
	
	var grid = 	{
		    url: baseUrl+'/workstation/hisDataGrid'+"?busiId=" + busiId+"&busiType="+busiType+"&status="+status,
		    striped: true,
		    rownumbers: false,
		    pagination: false,
		    singleSelect: true,
		    fitColumns: true,
		    idField: 'id',
		    sortName: 'id',
		    sortOrder: 'asc',
		    columns : [[
		                {width : $(this).width() * 0.1,title : '环节名称',field : 'workitemName',align : 'center'},
		                {width : $(this).width() * 0.15,title : '审核人',field : 'realParticipantName',align : 'center'},
		       	        {width : $(this).width() * 0.15,title : '所做操作',field : 'action',align : 'center',formatter: function(value, row, index) {
			 		            var operType = '&nbsp;&nbsp;';
				            	if (row.workitemStatus == 12) {
			 		   				operType = "审核通过";
			 		   				if (row.workitemName.indexOf("提交")>=0||row.workitemName.indexOf("简退")>=0) {
						   				operType = "提交";
						   			}
			 		   			}
				            	if (row.workitemStatus == 8) {
			 		   				operType = "流程调整";
			 		   			}
			 		   			if (row.workitemStatus == 7) {
			 		   				operType = "退回";
			 		   			}
			 		   		    if (row.workitemStatus == 6) {
					   				operType = "简退";
					   			}
			 		   		   
			 		            return operType;
		                   }   
		       	        },{width : $(this).width() * 0.25,title : '审核意见',field : 'operationComment',align : 'center'} ,
		                {width : $(this).width() * 0.2,title : '操作时间',field : 'auditTime',align : 'center'} 
		                ]],onLoadSuccess:function(data){
		   		    	var size = data.total;
		   		    	if (size == 0) {
		   		    	  $('#historydata_fieldset').attr("style","display:none");
		   		    	  
		   				}},onBeforeLoad:function(data){
					    	$.ajax({  
					            type : "post",  
					             url: baseUrl+'/workstation/hisDataGrid',
					             data : "busiId=" + busiId+"&busiType="+busiType+"&status="+status,  
					             async : false,  
					             success : function(data){
					           	  var size = JSON.parse(data).total;
					           	  var height = size * 30+50;
					           	 $('#historydata_fieldset').height(height);
					           	 var child = $('#historydata_fieldset').children("div");
							    	child.height((height-30));
					             }  
					        });
			 		    }
	}

	$('#'+hisdataGrid).datagrid(grid);
}

/**
 * 显示审核过程中的附件
 * @param busiId
 * @param documentType
 * @param baseUrl
 */
function displayAttachment(divId,busiId,documentType,baseUrl){
	//先显示
	$('#'+divId). attr("style","display:;border:1px solid rgb(230, 230, 230)");
	$('#uploadAttachment_table').datagrid({
    url: baseUrl + '/downloaddoc/queryPmAttachment?referenceId=' + busiId+"&documentType="+documentType,
    striped: true,
    rownumbers: false,
    pagination: false,
    singleSelect: true,
    fitColumns: true,
    idField: 'id',
    sortName: 'id',
    sortOrder: 'asc',
    columns: [[ {width : $(this).width() * 0.35,title : '附件描述',field : 'description',align : 'center'},
                {width : $(this).width() * 0.35,title : '附件名称',field : 'documentName',align : 'center'} ,
                { width: $(this).width() * 0.3, field: 'action', title: '操作', align: 'center',formatter: function(value, row, index) {
		            var str = '&nbsp;&nbsp;';
		            if (row.isdefault != 0) {
		                    str += $.formatString('<a href=' + baseUrl+'/downloaddoc/download?fileId=' + row.pathName + '&documentName=' + encodeURI(encodeURI(row.documentName)) + '>下载</a>');
		                    str += '&nbsp;&nbsp;';
		        	}
		            return str;
        		}
    }]],
    onLoadSuccess:function(data){
    	var size = data.total;
    	if (size == 0) {
    	 //如果没有附件则不显示
    	  $('#'+divId).attr("style","display:none;");
		}
    }
});
	
}

/**
 * 上传附件，上传后可删除
 * @param busiId
 * @param documentType
 * @param baseUrl
 */
var dataGriduploadAttachment = {
    striped: true,
    rownumbers: false,
    pagination: false,
    singleSelect: true,
    fitColumns: true,
    idField: 'id',
    sortName: 'id',
    sortOrder: 'asc',
    pageSize: 5,
    pageList: [5, 10, 15],
    columns: [[
       	       {width : $(this).width() * 0.35,title : '附件描述',field : 'description',align : 'center'},
               {width : $(this).width() * 0.35,title : '附件名称',field : 'documentName',align : 'center'} ,
               { width: $(this).width() * 0.3, field: 'action', title: '操作', align: 'center',
		        formatter: function(value, row, index) {
		            var str = '&nbsp;&nbsp;';
		            if (row.isdefault != 0) {
		            	    str += $.formatString('<a href=' + baseUrl+'/downloaddoc/download?fileId=' + row.pathName + '&documentName=' + encodeURI(encodeURI(row.documentName)) + '>下载</a>');
		                    str += '&nbsp;&nbsp;|&nbsp;&nbsp;';
		                    str += $.formatString('<a href="javascript:void(0)" onclick="fileDelete(\'{0}\',\'{1}\');">删除</a>',row.id,baseUrl);
		            }
		            return str;
        }
    }]],
    onLoadSuccess:function(data){
    	var size = data.total;
    	if (size == 0) {
     	   $('#uploadAttachment_fileQueue').attr("style","display:none");
 		    }
     	    else{
     	      $('#uploadMeetDoc_input').val("has file");
     	      $('#uploadAttachment_input').val(size);
     	   }
    }
}


function displayAndEditAttachment(busiId,documentType,baseUrl){
	dataGriduploadAttachment.url =  baseUrl + '/downloaddoc/queryPmAttachment?referenceId=' + busiId+"&documentType="+documentType;
    $('#uploadAttachment_filetable').datagrid(dataGriduploadAttachment);
}

//下载删除
function fileDelete(id,baseurl) {
    $.messager.confirm('询问', '您是否要删除当前数据？',
    function(b) {
        if (b) {
            progressLoad();
            $.post(baseurl+'/downloaddoc/delete', {
                id: id
            },
            function(result) {
                if (result.success) {
                    parent.$.messager.alert('提示', result.msg, 'info');
                    $('#uploadAttachment_filetable').datagrid('reload');
                }
                progressClose();
            },
            'JSON');
        }
    });
}

/**
 * 意向流程
 * 
 * @author wangxiaojian
 * @param doc
 *            document对象
 * @param fieldsetId
 *            意见标签ID
 * @param dataId
 *            详情页中保存数据项ID的标签ID
 * @param baseUrl
 *            项目地址
 * @param isAudi
 *            项目地址是否为审阅人
 * @date 2015-07-29
 */
function changeIntentStyle(doc,fieldsetId,dataId,baseUrl,hisdataGrid) {
	var isAudi = $("#isAudi").val();
	var detail = $("#detail").val();
	var writefields = $('#writefields').val();
	var readfields = $('#readfields').val();
	var status = $('#status').val();
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	//待办
	if (isAudi == "true") {
		isAudi = true;
	}
	//草稿或者修改，名称为只读
	else if(isAudi == "false"){
		isAudi = false;
		$("#name").attr("readonly","readonly");
	}else if(isAudi == "NA"){
		isAudi = false;
	}
	//查看或者代办中打开
	if (isAudi) {
		$('.docment').attr("style","display:none");
	   if(status != RETURNED_DRAFT && status != BRIEFRETURNED_DRAFT){
		   //简退与退回草稿
		  $(":input").attr("readonly","readonly");
		  $(".linkbutton-remove").remove();
	   }
	   else{
		   $('.docment').attr("style","display:");
		   
	   }
	   $("#name").attr("readonly","readonly");
	}
	if (detail == "Y" || opinionBox=="false") {
		  $('.docment').attr("style","display:none");
		  $(":input").attr("readonly","readonly");
		  $(".linkbutton-remove").remove();
		// $('#uploadMeetDoc_div').attr("style","border:1px solid white;padding:10px;border-image:none;margin-bottom:10px");
		  $('#uploadMeetDoc_div').attr("style","border:1px solid rgb(230, 230, 230);padding:10px;border-image:none;margin-bottom:10px");
 		 displayAttachment("uploadMeetDoc_div",$("#"+dataId).val(), INTENT_UPLOADMEET, baseUrl);
	}
	var busiType = $('#busiType').val();
	var obj = $("#"+dataId);
	if (isAudi) {
			$('#'+fieldsetId).attr("style","display:");
			obj = $("#"+dataId).val();
			generateAudiHis2(hisdataGrid, baseUrl, obj, busiType, status);
			$("#yijian").removeAttr("readonly");
		}
		// 分配意向号,加审,指派实施部门
		if (writefields.indexOf(",")>=0) {
			var strs= new Array(); //定义一数组 
			strs=writefields.split(","); //字符分割 
			for (i=0;i<strs.length ;i++ ) 
			{ 
				if (strs[i] == "") {
					continue;
				}
				//显示附件grid
				if (strs[i] == "uploadMeetDoc") {
					 $('#uploadAttachment_fileQueue').attr("style","display:;border:1px solid white;padding:10px;border-image:none;margin-bottom:10px");
					 displayAndEditAttachment($("#"+dataId).val(), INTENT_UPLOADMEET, baseUrl);
				}
				$('#'+strs[i]+'_tr').attr("style","display:");
				$("#"+strs[i]).removeAttr("readonly");
				$("#"+strs[i]).attr("data-options","required:true");
			} 
		}
		//显示会议纪要
		if (readfields.indexOf(",")>=0) {
			var strs= new Array(); //定义一数组 
			strs=readfields.split(","); //字符分割 
			for (var i=0;i<strs.length ;i++ ) 
			{ 
				if (strs[i] == "") {
					continue;
				}
				$('#'+strs[i]+'_div').attr("style","border:1px solid white;padding:10px;border-image:none;margin-bottom:10px");
				displayAttachment(strs[i]+'_div',$("#"+dataId).val(), INTENT_UPLOADMEET, baseUrl);
			} 
		}
		// 草稿或者新建，不显示审核意见 如果是查看页面，则不显示审核意见
		if (!isAudi || detail == "Y" || RETURNED_DRAFT == status || BRIEFRETURNED_DRAFT == status) {
			$('#audiId').attr("style","display:none");
		}
		
		if (opinionBox=="false") {
			$('#audiId').attr("style","display:none");
		}
}

/**
 * 结算单 流程
 * 
 * @param doc
 * @param fieldsetId
 *            审核信息标签
 * @param dataId
 *            业务标签ID
 * @param baseUrl
 * @param operate
 * @param hisdataGrid
 *            审核历史记录
 */
function changBbeforepayoffStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid){
	var busiType = PAYOFFBILL_ID;
	var writefields = $('#writefields').val();
	var readHtmlIds = $('#readHtmlIds').val();
	var detail  =  $('#detail').val();
	var status  =  $('#status').val();
	if (detail == "true") {
		detail = true;
		$(":input").attr("readonly","readonly");
		  $(".linkbutton-remove").remove();
		$('#statementsNo_tr').attr("style","display:");
	}else {
		detail = false;
	}
	var isAudi =  $('#isAudi').val();
	if (isAudi == "true") {
		isAudi = true;
	}else {
		isAudi = false;
	}
	var obj = $("#"+dataId);
	if (detail||isAudi) {
		if (RETURNED_DRAFT != status && BRIEFRETURNED_DRAFT != status) {
		  $(":input").attr("readonly","readonly");
		  $(".linkbutton-remove").remove();
		}
		$('#'+fieldsetId).attr("style","display:");
		obj = $("#"+dataId);
		generateAudiHis2(hisdataGrid, baseUrl, obj.val(), 71, status);
	}
	if (detail || RETURNED_DRAFT == status || BRIEFRETURNED_DRAFT == status) {
		$('#audiId').attr("style","display:none");
	}
	if (isAudi) {
	 $("#yijian").removeAttr("readonly");
	}
	// 查询当前环节是否为 ‘经营管理部’，如果是，分配结算单号
	if (writefields.indexOf(",")>=0 ) {
		var strs= new Array(); //定义一数组 
		strs=writefields.split(","); //字符分割 
		for (i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
		     $('#'+strs[i]+'_tr').attr("style","display:");
	     	 $("#"+strs[i]).removeAttr("readonly");
			 $("#"+strs[i]).attr("data-options","required:true");
		} 

	}
	//显示结算单号
	if (readHtmlIds.indexOf(",")>=0 ) {
		var strs= new Array(); //定义一数组 
		strs=readHtmlIds.split(","); //字符分割 
		for (i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
		    $('#'+strs[i]+'_tr').attr("style","display:");
		} 

	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
	
}

/**
 * 意向销售经理变更 流程
 * 
 * @param doc
 * @param fieldsetId
 *            审核信息标签
 * @param dataId
 *            业务标签ID
 * @param baseUrl
 * @param operate
 * @param hisdataGrid
 *            审核历史记录
 */
function changSalesManagerStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid){
	var isAudi = $("#isAudi").val();
	var status  =  $('#status').val();
	if (isAudi == "true") {
		isAudi = true;
	}else {
		isAudi = false;
	}
	var obj = $("#"+dataId);
	if (isAudi) {
		$("#"+fieldsetId).css('display','');
		obj = $("#"+dataId);
		generateAudiHis2(hisdataGrid, baseUrl, obj.val(), SALESMANAGER_CHANGE_ID, status);
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
}

/***
 * 项目情况说明单流程
 * */
function acctexplainAppStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid){
	var isAudi = $("#isAudi").val();
	var status  =  $('#status').val();
	if (isAudi == "true") {
		isAudi = true;
	}else {
		isAudi = false;
	}
	var obj = $("#"+dataId);
	if (isAudi) {
		$("#"+fieldsetId).css('display','');
		generateAudiHis2(hisdataGrid, baseUrl, obj.val(), ACCT_OTHERATTACHMENT_ID, status);
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
}

/***
 * 项目权责收入支出月计划流程
 * */
function liabilityPlanAppStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid){
	var isAudi = $("#isAudi").val();
	var status  =  $('#status').val();
	if (isAudi == "true") {
		isAudi = true;
	}else {
		isAudi = false;
	}
	var obj = $("#"+dataId);
	if (isAudi) {
		$("#"+fieldsetId).css('display','');
		generateAudiHis2(hisdataGrid, baseUrl, obj.val(), MONTH_PROJECTACCUAL_ID, status);
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
}
/***
 * 资金收入支出计划流程
 * */
function incomeAppStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid){
	var isAudi = $("#isAudi").val();
	var status  =  $('#status').val();
	if (isAudi == "true") {
		isAudi = true;
	}else {
		isAudi = false;
	}
	var obj = $("#"+dataId);
	if (isAudi) {
		$("#"+fieldsetId).css('display','');
		generateAudiHis2(hisdataGrid, baseUrl, obj.val(), MONTH_PROJECTFUNDS_ID, status);
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
}
/***
 * 人工成本费用表月计划流程
 * */
function humanResourcesAppStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid){
	var isAudi = $("#isAudi").val();
	var status  =  $('#status').val();
	if (isAudi == "true") {
		isAudi = true;
	}else {
		isAudi = false;
	}
	var obj = $("#"+dataId);
	if (isAudi) {
		$("#"+fieldsetId).css('display','');
		generateAudiHis2(hisdataGrid, baseUrl, obj.val(), MONTH_LABORCOST_ID, status);
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false" || status==RETURNED_DRAFT) {
		$('#audiId').attr("style","display:none");
		$("#"+fieldsetId).css('display','');
		generateAudiHis2(hisdataGrid, baseUrl, obj.val(), MONTH_LABORCOST_ID, status);
	}
}

/***
 * 部门费用表月计划流程
 * */
function departMentCostAppStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid){
	var isAudi = $("#isAudi").val();
	var status  =  $('#status').val();
	var detail  =  $('#detail').val();
	if (isAudi == "true") {
		isAudi = true;
	}else {
		isAudi = false;
	}
	var obj = $("#"+dataId);
	if (isAudi || detail=="Y") {
		$("#"+fieldsetId).css('display','');
		$('textarea').attr({"readonly":"readonly"});
		generateAudiHis2(hisdataGrid, baseUrl, obj.val(), MONTH_DEPARTCHARGE_ID, status);
		if (!isAudi ||detail=="Y" ||status == RETURNED_DRAFT || status == BRIEFRETURNED_DRAFT) {//减退 退回草稿 详情页不显示审核意见
			$('#audiId').attr("style","display:none");
		}
		$("#yijian").removeAttr("readonly");
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
		$("#"+fieldsetId).css('display','');
		generateAudiHis2(hisdataGrid, baseUrl, obj.val(), MONTH_DEPARTCHARGE_ID, status);
	}
}
/***
 * 行政办公汇总月计划流程
 * */
function summaryOfAdministrativeOfficeExpensesAppStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid){
	var isAudi = $("#isAudi").val();
	var status  =  $('#status').val();
	var detail  =  $('#detail').val();
	if (isAudi == "true") {
		isAudi = true;
	}else {
		isAudi = false;
	}
	var obj = $("#"+dataId);
	if (isAudi || detail=="Y") {
		$("#"+fieldsetId).css('display','');
		$('textarea').attr({"readonly":"readonly"});
		generateAudiHis2(hisdataGrid, baseUrl, obj.val(), MONTH_OFFICECHARGE_TOTAL_ID, status);
		if (!isAudi ||detail=="Y" ||status == RETURNED_DRAFT || status == BRIEFRETURNED_DRAFT) {//减退 退回草稿 详情页不显示审核意见
			$('#audiId').attr("style","display:none");
		}
		$("#yijian").removeAttr("readonly");
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
		$("#"+fieldsetId).css('display','');
		generateAudiHis2(hisdataGrid, baseUrl, obj.val(), MONTH_OFFICECHARGE_TOTAL_ID, status);
	}
}

/**
 * 交接单 流程
 * 
 * @param doc
 * @param fieldsetId
 *            审核信息标签
 * @param dataId
 *            业务标签ID
 * @param baseUrl
 * @param operate
 * @param hisdataGrid
 *            审核历史记录
 */
function changHandOverStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid){
	var isAudi = $("#isAudi").val();
	var detail = $("#details").val();
	var status  =  $('#status').val();
	var readHtmlIds = $('#readHtmlIds').val();
	var writefields = $('#writeHtmlIds').val();
	if (isAudi == "true") {
		isAudi = true;
		if(status != RETURNED_DRAFT && status != BRIEFRETURNED_DRAFT ){
			$(".glay,.span2").attr("readonly","readonly");
			$('input:radio[name="isDependencyProject"]').prop('disabled', true);//设置单选框不可用
			$(".easyui-combobox,.easyui-datebox").combobox({
		        "readonly": "readonly"
		    });
			$("#uploadAttachment").hide();
			$("#uploadAttachment_tr").hide();
		}
	}else {
		isAudi = false;
	}
	if(detail=="Y"){//详细信息时文本框可读不允许编辑
		  $(".easyui-combobox").combobox({
		        "readonly": "readonly"
		    });
		    $(".glay").attr("readonly","readonly");
		    $('input:radio[name="isDependencyProject"]').prop('disabled', true);//设置单选框不可用
		    $('#audiId').attr("style","display:none");//隐藏审核意见
		    $(".linkbutton-remove").remove();
		    $("#chooseProjectManager_tr").attr("style","display:");//显示项目经理
	}
	var obj = $("#"+dataId);
	if (detail=="Y" || isAudi) {
		$("#"+fieldsetId).css('display','');
		generateAudiHis2(hisdataGrid, baseUrl, obj.val(), HANDOVER_ID, status);
	}
	if(isAudi){
		$('#audiId').attr("style","display:");//显示审核意见
	}
	if (detail=="Y" ||status == RETURNED_DRAFT || status == BRIEFRETURNED_DRAFT) {
		$('#audiId').attr("style","display:none");
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
	//项目经理--可编辑
	if (writefields.indexOf(",")>=0) {
		var strs= new Array(); //定义一数组 
		strs=writefields.split(","); //字符分割 
		for (i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
		     $('#'+strs[i]+'_tr').attr("style","display:");
	     	 $("#"+strs[i]).removeAttr("readonly");
			 $("#"+strs[i]).attr("data-options","required:true");
		} 
	}
	//项目经理-只读
	if (readHtmlIds.indexOf(",")>=0) {
		var strs= new Array(); //定义一数组 
		strs=readHtmlIds.split(","); //字符分割 
		for (i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
		     $('#'+strs[i]+'_tr').attr("style","display:");
		     $("#"+strs[i]).attr('disabled','disabled');
		     $("#"+strs[i]).addClass("readonly"); 
		} 
	}
	
}

/**
 * 立项 流程
 * 
 * @param document
 * @param fieldsetId
 * @param dataId
 * @param baseUrl
 * @param hisdataGrid
 */
function changeItemStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid) {
	var busiType = $('#busiType').val();
	//document.getElementById("isAudi").value;
	var isAudi = $('#isAudi').val();
	var status  =  $('#status').val();
	var readfields = $('#readHtmlIds').val();
	var writefields = $('#writeHtmlIds').val();
	//待办
	if (isAudi == "true") {
		isAudi = true;
	}
	//草稿或者修改
	else if(isAudi == "false"){
		isAudi = false;
		$("#name").attr("readonly","readonly");
		$("#name").attr("style","background-color: #DDDDDD");
	}else if(isAudi == "NA"){
		isAudi = false;
	}
	if (isAudi && operType=="3") {
		$(":input").attr("readonly","readonly");
		$(".linkbutton-remove").remove();
	}
	var obj = $('#'+dataId).val();
	var operType = $("#operType").val();
	if(operType == "2"){//修改
		$("#name").attr("readonly","readonly");
		$("#name").attr("style","background-color: #DDDDDD");
	}
	if(operType == "3"){//查看
		$(":input").attr("readonly","readonly");
	}
	if (isAudi || operType == "3") {
		$('#fieldsetId').css("display","block");
		generateAudiHis2(hisdataGrid, baseUrl,obj, busiType, status);
		$("#yijian").removeAttr("readonly");
	}
	
	//显示副总加审,评审信息，可编辑
	if (writefields.indexOf(",")>=0) {
		var strs= new Array(); //定义一数组 
		strs=writefields.split(","); //字符分割 
		for (var i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
			if(strs[i] == "itemAddAudit"){
				$('#itemAddAudit').css("display","");
		        $("#addAudit").removeAttr("readonly");
			}
			if(strs[i]=="itemCreateComents"){
				$('#itemCreateComents').css("display","");
				  $("[id^='ping_']").each(function(i,obj){
			        	$(obj).removeAttr("readonly");
			       });
			}
			if(strs[i]=="uploadMeetDoc"){
				$('#uploadMeetDoc').css("display","");
				$("#uploadMeetDocId").removeAttr("readonly");
			}
		} 
	}
	//显示副总加审,评审信息
	if (readfields.indexOf(",")>=0) {
		var strs= new Array(); //定义一数组 
		strs=readfields.split(","); //字符分割 
		for (var i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
			if(strs[i] == "itemAddAudit"){
				$('#itemAddAudit').css("display","");
			}
			if(strs[i]=="itemCreateComents"){
				$('#itemCreateComents').css("display","");
			}
			if(strs[i]=="uploadMeetDoc"){
				$('#uploadMeetDoc').css("display","");
			}
		} 
	}
	
	//如果是查看页面，则不显示审核意见
	if (operType == "3" && !isAudi) {
		$('#audiId').css("display","none");
	}
	// 退回草稿或者简退，不显示审核意见 
	if (RETURNED_DRAFT == status || BRIEFRETURNED_DRAFT == status) {
		$('#audiId').attr("style","display:none");
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
}  
/**
 * 项目变更
 * 
 * @param document
 * @param fieldsetId
 * @param dataId
 * @param baseUrl
 * @param hisdataGrid
 */
function changeItemChangeStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid) {
	var busiType = ITEMCHANGE_ID;
	var isAudi = $('#isAudi').val();
	var status  =  $('#status').val();
	var readfields = $('#readHtmlIds').val();
	var writefields = $('#writeHtmlIds').val();
	var operType = $("#operType").val();
	//待办
	if (isAudi == "true") {
		isAudi = true;
	}
	//草稿或者修改
	else if(isAudi == "false"){
		isAudi = false;
		$("#name").attr("readonly","readonly");
		$("#name").attr("style","background-color: #DDDDDD");
	}else if(isAudi == "NA"){
		isAudi = false;
	}
	if (isAudi && operType=="3") {
		$(":input").attr("readonly","readonly");
		$(".linkbutton-remove").remove();
	}
	var obj = $('#'+dataId).val();
	if(operType == "2"){//修改
		$("#name").attr("readonly","readonly");
		$("#name").attr("style","background-color: #DDDDDD");
	}
	if(operType == "3"){//查看
		$(":input").attr("readonly","readonly");
	}
	if (isAudi || operType == "3") {
		$('#fieldsetId').css("display","block");
		$("input[type='checkbox']").attr("disabled","disabled");
		generateAudiHis2(hisdataGrid, baseUrl,obj, ITEMCHANGE_ID, status);
		$("#yijian").removeAttr("readonly");
	}
	//显示加审,可编辑
	if (writefields.indexOf(",")>=0) {
		var strs= new Array(); //定义一数组 
		strs=writefields.split(","); //字符分割 
		for (var i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
			if(strs[i] == "itemAddAudit"){
				$('#itemAddAudit').css("display","");
		        $("#addAudit").removeAttr("readonly");
		      //  $("input[type='checkbox']").attr("disabled","");
		        $("input[name='addAuditBoss']").removeAttr("disabled");
			}
			if(strs[i]=="uploadMeetDoc"){
				$('#uploadMeetDoc').css("display","");
				$("#uploadMeetDocId").removeAttr("readonly");
			}
		} 
	}
	//显示加审
	if (readfields.indexOf(",")>=0) {
		var strs= new Array(); //定义一数组 
		strs=readfields.split(","); //字符分割 
		for (var i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
			if(strs[i] == "itemAddAudit"){
				$('#itemAddAudit').css("display","");
			}
			if(strs[i]=="uploadMeetDoc"){
				$('#uploadMeetDoc').css("display","");
			}
		} 
	}
	
	//如果是查看页面，则不显示审核意见
	if (operType == "3" && !isAudi) {
		$('#audiId').css("display","none");
	}
	// 退回草稿或者简退，不显示审核意见 
	if (RETURNED_DRAFT == status || BRIEFRETURNED_DRAFT == status) {
		$('#audiId').attr("style","display:none");
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
	
}  

/**
 * 结项 流程
 * 
 * @param document
 * @param fieldsetId
 * @param dataId
 * @param baseUrl
 * @param hisdataGrid
 */
function changeItemStopStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid) {
	var busiType = ITEMEND_ID;
	//document.getElementById("isAudi").value;
	var isAudi = $('#isAudi').val();
	var status  =  $('#status').val();
	var readfields = $('#readHtmlIds').val();
	var writefields = $('#writeHtmlIds').val();
	//待办
	if (isAudi == "true") {
		isAudi = true;
	}
	//草稿或者修改
	else if(isAudi == "false"){
		isAudi = false;
		$("#name").attr("readonly","readonly");
		$("#name").attr("style","background-color: #DDDDDD");
	}else if(isAudi == "NA"){
		isAudi = false;
	}
	if (isAudi && operType=="3") {
		$(":input").attr("readonly","readonly");
		$(".linkbutton-remove").remove();
	}
	var obj = $('#'+dataId).val();
	var operType = $("#operType").val();
	if(operType == "2"){//修改
		$("#name").attr("readonly","readonly");
		$("#name").attr("style","background-color: #DDDDDD");
	}
	if(operType == "3"){//查看
		$(":input").attr("readonly","readonly");
	}
	if (isAudi || operType == "3") {
		$('#fieldsetId').css("display","block");
		$('#itemEndCostSheet1').css("display","block");
		$('#itemEndCostSheet2').css("display","block");
		$('#itemEndCostSheet3').css("display","block");
		generateAudiHis2(hisdataGrid,baseUrl,obj,ITEMEND_ID, status);
		$("#yijian").removeAttr("readonly");
	}
	//显示费用表,可编辑
	if (writefields.indexOf(",")>=0) {
		var strs= new Array(); //定义一数组 
		strs=writefields.split(","); //字符分割 
		for (var i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
			if(strs[i] == "itemEndCostSheet"){
				$('#itemEndCostSheet1').css("display","");
				$('#itemEndCostSheet2').css("display","");
				$('#itemEndCostSheet3').css("display","");
		        $("#itemEndCostSheet3 input[type='text']").each(function(i,obj){
		        	 $(obj).removeAttr("readonly");
		        });
			}
		} 
	}
	//显示费用表
	if (readfields.indexOf(",")>=0) {
		var strs= new Array(); //定义一数组 
		strs=readfields.split(","); //字符分割 
		for (var i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
			if(strs[i] == "itemEndCostSheet"){
				$('#itemEndCostSheet1').css("display","");
				$('#itemEndCostSheet2').css("display","");
				$('#itemEndCostSheet3').css("display","");
			}
		} 
	}
	if (operType == "3" && !isAudi) {
		$('#audiId').css("display","none");
	}
	// 退回草稿或者简退，不显示审核意见 
	if (RETURNED_DRAFT == status || BRIEFRETURNED_DRAFT == status) {
		$('#audiId').attr("style","display:none");
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
}  
/**
 * 冲暂估 流程
 * 丁川川
 * @param document
 * @param fieldsetId
 * @param dataId
 * @param baseUrl
 * @param hisdataGrid
 */
function  changeEstimatedrStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid) {
	var busiType = ESTRELEASE_ID;
	var writefields = $('#writeHtmlIds').val();
	var readHtmlIds = $('#readHtmlIds').val();
	var status  =  $('#status').val();
	var detail = $("#details").val();
	var isAudi = $('#isAudi').val();
	if (isAudi == "true") {
		isAudi = true;
	}
	else if(isAudi == "NA"){
		isAudi = false;
	}
	else {
		isAudi = false;
	}
	//查看或者代办中打开，所有字段默认只读
	var obj = $('#'+dataId).val();
	if (detail == "Y" || isAudi) {
		if(status != RETURNED_DRAFT && status != BRIEFRETURNED_DRAFT ){
			   //简退与退回草稿
		      $(":input").attr("readonly","readonly");
		      $(".linkbutton-remove").remove();
		      $('#fieldsetIdAttach').hide();
		 }
		$("#"+fieldsetId).css('display','');
		obj = $('#'+dataId).val();
		generateAudiHis2(hisdataGrid, baseUrl,obj, ESTRELEASE_ID, status);
		if (detail == "Y") {
			$('#audiId').attr("style","display:none");
			$('#erpNum_tr').attr("style","display:");
			//查看
		}
		if (status == RETURNED_DRAFT || status == BRIEFRETURNED_DRAFT) {
			$('#audiId').attr("style","display:none");
		}
		$("#yijian").removeAttr("readonly");
	}
	//结算单号
	if (writefields.indexOf(",")>=0) {
		var strs= new Array(); //定义一数组 
		strs=writefields.split(","); //字符分割 
		for (i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
		     $('#'+strs[i]+'_tr').attr("style","display:");
	     	 $("#"+strs[i]).removeAttr("readonly");
			 $("#"+strs[i]).attr("data-options","required:true");
	     	 $("#"+strs[i]).attr("class","easyui-validatebox span2");
		} 

	}
	if (readHtmlIds.indexOf(",")>=0) {
		var strs= new Array(); //定义一数组 
		strs=readHtmlIds.split(","); //字符分割 
		for (i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
		     $('#'+strs[i]+'_tr').attr("style","display:");
		} 

	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
}
/**
 * 存货入账与入账开票 流程
 * 入暂估
 * @param document
 * @param fieldsetId
 * @param dataId
 * @param baseUrl
 * @param hisdataGrid
 */
function changeIncomeStyle(doccument,fieldsetId,dataId,baseUrl,hisdataGrid,busiType) {
	var writefields = $('#writeHtmlIds').val();
	var readHtmlIds = $('#readHtmlIds').val();
	var isAudi = $('#isAudi').val();
	var status  =  $('#status').val();
	var detail  =  $("#detail").val();
	if (detail=="Y") {
	   $(":input").attr("readonly","readonly");
	   $(".linkbutton-remove").remove();
	}
	if(busiType==DEPOSITBOOK_ID&& detail!="Y"){
		$('#uploadAttachment_fileQueue').hide();
		$('#uploadAttachment_div').hide();
	}
	if (isAudi == "true") {
		isAudi = true;
		  if(status != RETURNED_DRAFT && status != BRIEFRETURNED_DRAFT ){
			   //简退与退回草稿
			 $(":input").attr("readonly","readonly");
			 $(".linkbutton-remove").remove();
			 $("#searchItem").hide();//入账开票隐藏查询项目结算单
			 $('#isShow').val(513);
			 $('#fieldsetIdAttach').hide();
			 $('#fieldsetIdAttach').attr("style","display:none");
			 //采购单号只读
		   }
		  if(status == RETURNED_DRAFT || status == BRIEFRETURNED_DRAFT){
			  $("#erpNum").attr("readonly","readonly");
		  }
	}else {
		isAudi = false;
	}
	if (isAudi || detail=="Y") {
		$('#'+fieldsetId).attr("style","display:");
		$('.docment').attr("style","display:none");
		if(status == RETURNED_DRAFT || status == BRIEFRETURNED_DRAFT){
			$('.docment').attr("style","display:");
		 }
		obj = $("#"+dataId);
		$('#audiId').attr("style","display:");
		generateAudiHis2(hisdataGrid, baseUrl,obj.val(), busiType, status);
		if (detail=="Y" ||status == RETURNED_DRAFT || status == BRIEFRETURNED_DRAFT) {
			$('#audiId').attr("style","display:none");
		}
		$("#yijian").removeAttr("readonly");
	}
	//采购单号||上传附件-可编辑
	if (writefields.indexOf(",")>=0) {
		var strs= new Array(); //定义一数组 
		strs=writefields.split(","); //字符分割 
		for (i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
			//显示附件grid
			if (strs[i] == "uploadAttachment") {
				 $('#uploadAttachment_fileQueue').attr("style","display:;border:1px solid rgb(230, 230, 230)");
				// $('#uploadAttachment_fileQueue').attr("style","display:;border:1px solid rgb(230, 230, 230);padding:10px;border-image:none;margin-bottom:10px");
				if (busiType == DEPOSITBOOK_ID) {
					displayAndEditAttachment($("#"+dataId).val(), INVOICE_DEPOSITBOOK_CHECK_UPLOADTYPE, baseUrl);
				}else if (busiType ==ESTINCOME_ID) {
					displayAndEditAttachment($("#"+dataId).val(), INVOICE_ESTIMATEDRELEASE_CHECK_UPLOADTYPE, baseUrl);
				}
				else {
					displayAndEditAttachment($("#"+dataId).val(), INVOICE_ACCOUNTINVOICE_CHECK_UPLOADTYPE, baseUrl);
				}
			}
		     $('#'+strs[i]+'_tr').attr("style","display:");
	     	 $("#"+strs[i]).removeAttr("readonly");
	     	 $("#"+strs[i]).attr("class","textarea easyui-validatebox");
			 $("#"+strs[i]).attr("data-options","required:true");
		} 
	}
	//采购单号||上传附件-只读
	if (readHtmlIds.indexOf(",")>=0) {
		var strs= new Array(); //定义一数组 
		strs=readHtmlIds.split(","); //字符分割 
		for (i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
			if (strs[i] == "uploadAttachment") {
				//$('#'+strs[i]+'_div').attr("style","display:;height:auto;border:1px solid rgb(230, 230, 230);");
				if (busiType == DEPOSITBOOK_ID) {
					displayAttachment(strs[i]+'_div',$("#"+dataId).val(), INVOICE_DEPOSITBOOK_CHECK_UPLOADTYPE, baseUrl);
				}else if (busiType ==ESTINCOME_ID) {
					displayAttachment(strs[i]+'_div',$("#"+dataId).val(), INVOICE_ESTIMATEDRELEASE_CHECK_UPLOADTYPE, baseUrl);
				}
				else {
					displayAttachment(strs[i]+'_div',$("#"+dataId).val(), INVOICE_ACCOUNTINVOICE_CHECK_UPLOADTYPE, baseUrl);
				}
				continue;
			}
		     $('#'+strs[i]+'_tr').attr("style","display:");
		} 
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (detail=="Y" || opinionBox=="false") {
	//	$('#uploadAttachment_div').attr("style","display:,height:50px;border:1px solid rgb(230, 230, 230);");
		//$('#uploadAttachment_div').attr("style","border:1px solid white;padding:10px;border-image:none;margin-bottom:10px");
		if (busiType == DEPOSITBOOK_ID) {
			displayAttachment("uploadAttachment_div",$("#"+dataId).val(), INVOICE_DEPOSITBOOK_CHECK_UPLOADTYPE, baseUrl);
		}else if (busiType ==ESTINCOME_ID) {
			displayAttachment("uploadAttachment_div",$("#"+dataId).val(), INVOICE_ESTIMATEDRELEASE_CHECK_UPLOADTYPE, baseUrl);
		}else {
			displayAttachment("uploadAttachment_div",$("#"+dataId).val(), INVOICE_ACCOUNTINVOICE_CHECK_UPLOADTYPE, baseUrl);
		}
	}
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
} 


function changeIncomeStyleAudit(doccument,fieldsetId,dataId,baseUrl,hisdataGrid,busiType) {
	var writefields = $('#writeHtmlIdds').val();
	var readHtmlIds = $('#readHtmlIdds').val();
	var isAudi = $('#isAudi').val();
	var status  =  $('#status').val();
	var detail  =  $("#detail").val();
	if (detail=="Y") {
	   $(":input").attr("readonly","readonly");
	   $(".linkbutton-remove").remove();
	}
	if(busiType==DEPOSITBOOK_ID&& detail!="Y"){
		$('#uploadAttachment_fileQueue').hide();
		$('#uploadAttachment_div').hide();
	}
	if (isAudi == "true") {
		isAudi = true;
		  if(status != RETURNED_DRAFT && status != BRIEFRETURNED_DRAFT ){
			   //简退与退回草稿
			 $(":input").attr("readonly","readonly");
			 $(".linkbutton-remove").remove();
			 $("#searchItem").hide();//入账开票隐藏查询项目结算单
			 $('#isShow').val(513);
			 $('#FileUploadAttAudit').hide();
			 $('#FileUploadAttAudit').attr("style","display:none");
			 $('#fieldsetIdAttach').hide();//隐藏上传附件按钮
			 //采购单号只读
		   }
		  if(status == RETURNED_DRAFT || status == BRIEFRETURNED_DRAFT){
			  $("#erpNum").attr("readonly","readonly");
		  }
	}else {
		isAudi = false;
	}
	if (isAudi || detail=="Y") {
		$('#'+fieldsetId).attr("style","display:");
		$('.docment').attr("style","display:none");
	
		obj = $("#"+dataId);
	}
	//采购单号||上传附件-可编辑
	if (writefields!=undefined && writefields.indexOf(",")>=0) {
		var strs= new Array(); //定义一数组 
		strs=writefields.split(","); //字符分割 
		for (i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
			//显示附件grid
			if (strs[i] == "uploadAttachment") {
				$('#fieldsetIdAttach').show();//隐藏上传附件按钮
				 $('#FileUploadAttAudit').attr("style","display:;border:1px solid rgb(230, 230, 230)");
				if (busiType == DEPOSITBOOK_ID) {
					displayAndEditAttachment($("#"+dataId).val(), INVOICE_ESTIMATEDRELEASE_DEPOSITBOOK_CHECK_UPLOADTYPE, baseUrl);
				}
				else {
					displayAndEditAttachment($("#"+dataId).val(), INVOICE_ESTIMATEDRELEASE_DEPOSITBOOK_CHECK_UPLOADTYPE, baseUrl);
				}
			}
		     $('#'+strs[i]+'_tr').attr("style","display:");
	     	 $("#"+strs[i]).removeAttr("readonly");
	     	 $("#"+strs[i]).attr("class","textarea easyui-validatebox");
			 $("#"+strs[i]).attr("data-options","required:true");
		} 
	}
	//采购单号||上传附件-只读
	if (readHtmlIds!=undefined &&readHtmlIds.indexOf(",")>=0) {
		var strs= new Array(); //定义一数组 
		strs=readHtmlIds.split(","); //字符分割 
		for (i=0;i<strs.length ;i++ ) 
		{ 
			if (strs[i] == "") {
				continue;
			}
			if (strs[i] == "uploadAttachment") {
				$('#fieldsetIdAttach').show();//隐藏上传附件按钮
				if (busiType == DEPOSITBOOK_ID) {
					displayAttachment(strs[i]+'_div',$("#"+dataId).val(), INVOICE_ESTIMATEDRELEASE_DEPOSITBOOK_CHECK_UPLOADTYPE, baseUrl);
				}else {
					displayAttachment(strs[i]+'_div',$("#"+dataId).val(), INVOICE_ESTIMATEDRELEASE_DEPOSITBOOK_CHECK_UPLOADTYPE, baseUrl);
				}
				continue;
			}
		     $('#'+strs[i]+'_tr').attr("style","display:");
		} 
	}
}


/**
 * 里程碑确认
 * 
 * @param document
 * @param fieldsetId
 * @param dataId
 * @param baseUrl
 * @param hisdataGrid
 */
function changeMilestoneproveStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid){
	var busiType = MILESTONE_CONFIRM_ID;
	var status  =  $('#status').val();
	var isAudi = $('#isAudi').val();
	if (isAudi == "true") {
		isAudi = true;
	}else {
		isAudi = false;
	}
	var obj = $("#"+dataId);
	if (isAudi) {
		$('#'+fieldsetId).attr("style","display:");
		obj = $("#"+dataId);
		generateAudiHis2(hisdataGrid, baseUrl,obj.val(), busiType, status);
		$('#audiId').attr("style","display:");
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
}


/**
 * 
 * @param doc
 * @param fieldsetId
 *            意见标签ID
 * @param busyType
 *            业务类型
 * @param busyId
 *            业务ID
 * @param calssname
 *            与前端展示字段相关的mvo类,类名之间用下划线分割
 */
function changeStyle2(doc,fieldsetId,busyType,busyId,calssname){
//	var obj = doc.getElementById(busyId);
	var obj = $("#"+busyId);
	var arrayObj = new Array();
	// obj.value == "" 表示新增
	if (obj.val() != "") {
		$.ajax({  
	         type : "post",  
	     	  url : url,
	          data : "id=" + obj.val()+"&busyType="+busyType,  
	          async : false,  
	          success : function(data){ 
	        	  data = eval("(" + data + ")");  
	        	  for ( var i = 0; i < data.length; i++) {
	        		    obj = $("#"+data[i].fildName);
	    				if (obj==null) {
	    					continue;
						}
	    				obj.attr("readonly",data[i].attributeValue);
	    				obj.css("background-color","#eee");
	    			} 
	          }  
	     });
		$("#"+fieldsetId).css('display','none');
	}

}


/**
 * 项目基础数据变更
 * 
 * @param document
 * @param fieldsetId
 * @param dataId
 * @param baseUrl
 * @param hisdataGrid
 */
function pmitemmanagerChangeOperationsStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid) {
	var isAudi = $('#isAudi').val();
	var detail = $("#details").val();
	var status  =  $('#status').val();
	var operType = $("#operType").val();
	if (isAudi == "true") {
		isAudi = true;
		   if(status != RETURNED_DRAFT && status != BRIEFRETURNED_DRAFT){
			   //简退与退回草稿
			  $(":input").attr("readonly","readonly");
			  $(".easyui-combobox").combobox({
			        "readonly": "readonly"
			    });
		   }
	} else {
		isAudi = false;
	}
	if(detail=="Y"){//详细信息时文本框可读不允许编辑
		  $(".easyui-combobox").combobox({
		        "readonly": "readonly"
		    });
		   $(".linkbutton-remove").remove();
		   $('#audiId').attr("style","display:none");
	}
	//查看、待办
	if (isAudi || operType == 3||detail=="Y") {
		$("#"+fieldsetId).css('display','');
		var obj = $('#'+dataId).val();
		generateAudiHis2(hisdataGrid, baseUrl,obj, PROJECTMANAGER_CHANGE_ID, status);
		$("#yijian").removeAttr("readonly");
		if (status == RETURNED_DRAFT || status == BRIEFRETURNED_DRAFT) {
			$('#audiId').attr("style","display:none");
		}
	}
	//查看
	if(operType == 3){
		$('#audiId').attr("style","display:none");
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
}

function getMyfdialog(){
	var fdialog = {
			title : '新增',
			hide:true,
			width : 620,
			height : 520,
		    cache: false,  
		    modal: false,
		    closable:false,
			buttons : [ {
				text : '确定',
				handler : function() {
					parent.$("#verifyForm").submit();
					f.dialog("close");
					parent.parent.$.modalDialog.handler.dialog("close");
				}
			},{
				text : '取消',
				handler : function() {
					parent.$("#table").remove();
					parent.$("#table2").remove();
					f.dialog("close");
					parent.$.modalDialog.handler.dialog("refresh");
				}
			} ]
		};
	return fdialog;
}
/**
 * 查看页面的审核历史记录
 * 
 * @param baseUrl
 * @param doc
 * @param busiId
 */
function showAudiHistoryRecord(baseUrl,doc,busiId) {
	var obj = $("#"+busiId).val();
	var busiType = $("#busiType").val();
	var status = $("#status").val();
	$.ajax({  
	    type : "post",  
	    url : baseUrl+'/workstation/hisDataGrid',
	    data : "busiId=" + obj+"&busiType="+busiType,  
	    async : false,  
	    success : function(data){
	  	  var array = $.parseJSON(data).rows;
	  	  if(array.lenght>0){
	  		 generateAudiHis2("PrintPagedataGrid", baseUrl,obj, busiType, status);
	  	  }else{
	  		 $('#fieldsetId').attr("style","display:");
	  	  }
	    }  
	});
}
/**
 * 打印页面
 */
function printme(){
//	bdhtml=document.getElementById('printDiv').innerHTML;  
	bdhtml = $("#printDiv").html();
	OpenWindow = window.open("");  
	OpenWindow.document.write("<HTML>"); 
	OpenWindow.document.write("<HEAD>"); 
	OpenWindow.document.write("<meta http-equiv=\"Content-Type\" content=\"text\/html; charset=utf-8\" \/>"); 
	OpenWindow.document.write("<TITLE>打印详情页<\/TITLE>"); 
    OpenWindow.document.write("<\/HEAD>"); 
	OpenWindow.document.write("<BODY>"); 
	OpenWindow.document.write("<div id='p'>"); 
	OpenWindow.document.write("<\/div>"); 
	OpenWindow.document.write("<\/BODY>"); 
	OpenWindow.document.write("<\/HTML>"); 
	OpenWindow.document.getElementById('p').innerHTML=bdhtml;  
//	$("#p").html(bdhtml);
	OpenWindow.document.close(); 
	OpenWindow.print(); 
}
/**
 * 打印页面
 */
function printme_01(){
//	bdhtml=document.getElementById('printDiv').innerHTML;  
	bdhtml = $("#printDiv").html();
	OpenWindow = window.open("");  
	OpenWindow.document.write("<HTML>"); 
	OpenWindow.document.write("<HEAD>"); 
	OpenWindow.document.write("<meta http-equiv=\"Content-Type\" content=\"text\/html; charset=utf-8\" \/>"); 
	OpenWindow.document.write("<TITLE>打印详情页<\/TITLE>"); 
    OpenWindow.document.write("<\/HEAD>"); 
	OpenWindow.document.write("<BODY>"); 
	OpenWindow.document.write("<div id='p'>"); 
	OpenWindow.document.write("<\/div>"); 
	OpenWindow.document.write("<\/BODY>"); 
	OpenWindow.document.write("<\/HTML>"); 
	OpenWindow.document.getElementById('p').innerHTML=bdhtml;  
//	$("#p").html(bdhtml);
	OpenWindow.document.close(); 
	OpenWindow.print(); 
	$("#printviewpage001").html("");
}

/**
 * 转维保交接表 流程
 * 
 * @param doc
 * @param fieldsetId
 *            审核信息标签
 * @param dataId
 *            业务标签ID
 * @param baseUrl
 * @param operate
 * @param hisdataGrid
 *            审核历史记录
 */

function changMaintenanceStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid){
	var isAudi = $("#isAudi").val();
    var detail = $("#detail").val();
	if (isAudi == "true") {
		isAudi = true;
		
	}else {
		isAudi = false;
	}
	var obj = $("#"+dataId);
	if (isAudi|| detail == "Y") {
		$('.docment').attr("style","display:none");
		   if(status != RETURNED_DRAFT && status != BRIEFRETURNED_DRAFT){
			   //不是简退与退回草稿状态
			  $(":input").attr("readonly","readonly");
			  $("input[type='radio']").attr("disabled","disabled");
			  $(".linkbutton-remove").remove();
			  $(".linkClass").removeAttr('href');
			  $(".linkClass").removeAttr('onclick');
		   }
		   else{
			   $('.docment').attr("style","display:");
		   }
		$("#"+fieldsetId).css('display','');
		obj = $("#"+dataId);
		generateAudiHis2(hisdataGrid, baseUrl,obj.val(), ITEM_MAINTAIN_HANDOVER_ID, status);
		//审核
		$("#yijian").removeAttr("readonly");
		// 草稿或者新建，不显示审核意见 如果是查看页面，则不显示审核意见
		if (!isAudi || detail == "Y" || RETURNED_DRAFT == status || BRIEFRETURNED_DRAFT == status) {
			$('#audiId').attr("style","display:none");
		}
		$("#yijian").removeAttr("readonly");
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
}

/**
 * 商机流程
 */
function oppHistory(document,fieldsetId,dataId,baseUrl,hisdataGrid) {
	var isAudi = $('#isAudi').val();
	var status  =  $('#status').val();
	var operType = $("#operType").val();//2-修改,3-查看
	var obj = $('#'+dataId).val();
	
	if (isAudi == "true") {			//待办
		isAudi = true;
	} else {						//添加草稿或者修改
		isAudi = false;
	}
	if (isAudi || operType == "3") {
		$("#"+fieldsetId).css('display','');
		generateAudiHis2(hisdataGrid, baseUrl,obj, BUSI_OPPORTUNITY_ID, status);
		$("#yijian").removeAttr("readonly");
	}
	//如果是查看页面，则不显示审核意见
	if (!isAudi) {
		$('#audiId').css("display","none");
	}
	// 退回草稿或者简退，不显示审核意见 
	if (RETURNED_DRAFT == status || BRIEFRETURNED_DRAFT == status) {
		$('#name').attr('readonly','readonly');
		$('#audiId').attr("style","display:none");
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
	
}

/**
 * 商机变更流程
 */
function oppChangeHistory(document,fieldsetId,dataId,baseUrl,hisdataGrid) {
	var isAudi = $('#isAudi').val();
	var status  =  $('#status').val();
	var operType = $("#operType").val();//2-修改,3-查看
	var obj = $('#'+dataId).val();
	
	if (isAudi == "true") {			//待办
		isAudi = true;
	} else {						//添加草稿或者修改
		isAudi = false;
	}
if (isAudi || operType == "3") {
		$("#"+fieldsetId).css('display','');
		generateAudiHis2(hisdataGrid, baseUrl,obj, BUSI_OPPORTUNITY_CHANGE_ID, status);
		$("#yijian").removeAttr("readonly");
	}
	//如果是查看页面，则不显示审核意见
	if (!isAudi) {
		$('#audiId').css("display","none");
	}
	// 退回草稿或者简退，不显示审核意见 
	if (RETURNED_DRAFT == status || BRIEFRETURNED_DRAFT == status) {
		$('#audiId').attr("style","display:none");
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
}
/***
 * 财务费用表月计划流程
 * */
function changeFinanceChargeStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid){
	var isAudi = $("#isAudi").val();
    var detail = $("#detail").val();
    var status = $("#status").val();
	if (isAudi == "true") {
		isAudi = true;
		
	}else {
		isAudi = false;
	}
	var obj = $("#"+dataId);
	if (isAudi|| detail == "Y") {
		$("#monthDate").removeAttr('onclick');
		$('.docment').attr("style","display:none");
		   if(status != RETURNED_DRAFT && status != BRIEFRETURNED_DRAFT){
			   //简退与退回草稿
			  $(":input").attr("readonly","readonly");
			  $("input[type='radio']").attr("disabled","disabled");
			  $(".linkbutton-remove").remove();
		   }
		   else{
			   $('.docment').attr("style","display:");
		   }
		$("#"+fieldsetId).css('display','');
		obj = $("#"+dataId);
		generateAudiHis2(hisdataGrid, baseUrl,obj.val(), MONTH_FINANCIALCOST_ID, status);
		//审核
		$("#yijian").removeAttr("readonly");
		// 草稿或者新建，不显示审核意见 如果是查看页面，则不显示审核意见
		if (!isAudi || detail == "Y" || RETURNED_DRAFT == status || BRIEFRETURNED_DRAFT == status) {
			$('#audiId').attr("style","display:none");
		}
		$("#yijian").removeAttr("readonly");
	}
}
/**
 * 月计划-办公维护费用
 */
function officePlanFinanceStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid){
	var isAudi = $('#isAudi').val();
	var status  =  $('#status').val();
	var detail  =  $("#detail").val();
	var opinionBox = $('#opinionBox').val();
	if (detail=="Y") {
	     $('.plan').attr({"readonly":"readonly"});
		 $(".Wdate").removeAttr("onclick");
	}
	if (isAudi == "true") {
		isAudi = true;
		if(status != RETURNED_DRAFT && status != BRIEFRETURNED_DRAFT ){
			   //简退与退回草稿
		     $('.plan').attr({"readonly":"readonly"});
			 $(".Wdate").removeAttr("onclick");
		}
	}else {
		isAudi = false;
	}
	if (isAudi || detail=="Y") {
		$('#'+fieldsetId).attr("style","display:");
		var obj = $("#"+dataId);
		generateAudiHis2(hisdataGrid, baseUrl,obj.val(), MONTH_OFFICECOST_ID, status);
		if (!isAudi ||detail=="Y" ||status == RETURNED_DRAFT || status == BRIEFRETURNED_DRAFT) {//减退 退回草稿 详情页不显示审核意见
			$('#audiId').attr("style","display:none");
		}
		$("#yijian").removeAttr("readonly");
	}else if(!isAudi){
		$('#audiId').attr("style","display:none");
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
	
}
	
/**
 * 月计划-宣传费用
 * @param document
 * @param fieldsetId
 * @param dataId
 * @param baseUrl
 * @param hisdataGrid
 */
function advertisingSpengdingStyle(document,fieldsetId,dataId,baseUrl,hisdataGrid,proId){
	var isAudi = $('#isAudi').val();
	var status  =  $('#status').val();
	var detail  =  $("#detail").val();
	var opinionBox = $('#opinionBox').val();
	if (detail=="Y") {
	     $('.plan').attr({"readonly":"readonly"});
		 $(".Wdate").removeAttr("onclick");
	}
	if (isAudi == "true") {
		isAudi = true;
		if(status != RETURNED_DRAFT && status != BRIEFRETURNED_DRAFT ){
			   //简退与退回草稿
		     $('.plan').attr({"readonly":"readonly"});
			 $(".Wdate").removeAttr("onclick");
		}
	}else  {
		isAudi = false;
	}
	if (isAudi || detail=="Y") {
		$('#'+fieldsetId).attr("style","display:");
		var obj = $("#"+dataId);
		generateAudiHis2(hisdataGrid, baseUrl,obj.val(), proId, status);
		if (!isAudi ||detail=="Y" ||status == RETURNED_DRAFT || status == BRIEFRETURNED_DRAFT) {//减退 退回草稿 详情页不显示审核意见
			$('#audiId').attr("style","display:none");
		}
		$("#yijian").removeAttr("readonly");
	}if(!isAudi){
		$('#audiId').attr("style","display:none");
	}
	// added by zhousm for 已办办结
	var opinionBox = $('#opinionBox').val();
	if (opinionBox=="false") {
		$('#audiId').attr("style","display:none");
	}
}