Ext.require('Ext.Panel');
Ext.require('Ext.form.Panel');
Ext.require('Ext.form.FieldSet');
Ext.require('Ext.field.Text');
Ext.require('Ext.field.Password');
Ext.require('Ext.Button');
Ext.application({
	name:'loginIndex',
	launch:function(){
		var loginForm = Ext.create('Ext.form.Panel',{
			id:'loginForm',
			layout:{
					type:'vbox',
					align:'center',
					pack:'center'
			},
			items:[{
				xtype:'fieldset',
				items:[{
					xtype:'textfield',
					id:'userName',
					name:'userName',
					label:'用户名:',
					placeHolder:'请输入用户名',
					labelWidth:'35%',
					maxLength: 16,
					required:true,
					clearIcon:false
				},{
					xtype:'passwordfield',
					id:'password',
					name:'password',
					label:'密&nbsp;&nbsp;&nbsp;&nbsp;码:',
					labelWidth:'35%',
					placeHolder:'请输入密码',
					maxLength: 16,
					required:true,
					clearIcon:false
				},{
					xtype:'button',
					id:'login',
					ui:'action',
					text:'登录'
				},{
					xtype:'panel'
				}]
			},{
				xtype:'panel',
				layout:{
					type:'hbox',
					align:'center',
					pack:'center'
				},
				cls:'end_link',
				items:[{
					xtype:'panel',
					html:'<a href="#">找回密码</a>'
				},{
					xtype:'panel',
					html:' | '
				},{
					xtype:'panel',
					html:'<a href="#">注册账号</a>'
				},{
					xtype:'panel',
					html:' | '
				},{
					xtype:'panel',
					html:'<a href="#">游客访问</a>'
				}]
			}]
		});
		Ext.Viewport.add(loginForm);
	}
});