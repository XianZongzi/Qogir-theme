module.exports = {
	types: [{
			value: '功能',
			name: '功能：一个新的功能。'
		},
		{
			value: '界面',
			name: '界面：一个新的界面元素。'
		},
		{
			value: '配置',
			name: '配置：运行时产生不同功能的配置。'
		},
		{
			value: '修复',
			name: '修复：修复一个问题。'
		},
		{
			value: '文档',
			name: '文档：对文档的修改。'
		},
		{
			value: '格式',
			name: '格式：不影响代码运行的变动。\n\t（空白符、格式化、缺少分号或其他）',
		},
		{
			value: '优化',
			name: '优化：优化代码使程序更高效。',
		},
		{
			value: '测试',
			name: '测试：增加一个测试。'
		},
		{
			value: '工具链',
			name: '工具链：构建过程或辅助工具的变动\n\t例如用来生成文档的库',
		},
		{
			value: '恢复',
			name: '恢复：返回到上一次提交。'
		},
		{
			value: '制作中',
			name: '制作中：正在持续制作一个功能。'
		},
	],

	// 类型前缀，后缀，分隔符。
	typePrefix: '',
	typeSuffix: '',
	subjectSeparator: '：',

	scopes: [{
		name: '影响'
	}, {
		name: '范围'
	}, {
		name: '会'
	}, {
		name: '因为'
	}, {
		name: '项目'
	}, {
		name: '不同'
	}, {
		name: '而'
	}, {
		name: '发生'
	}, {
		name: '变化'
	}],

	allowTicketNumber: false,
	isTicketNumberRequired: false,
	ticketNumberPrefix: 'TICKET-',
	ticketNumberRegExp: '\\d{1,5}',

	// it needs to match the value for field type. Eg.: 'fix'
	/*
	scopeOverrides: {
	  fix: [

		{name: 'merge'},
		{name: 'style'},
		{name: 'e2eTest'},
		{name: 'unitTest'}
	  ]
	},
	*/
	// override the messages, defaults are as follows
	messages: {
		type: "选择一个类型说明用于本次提交：",
		scope: '\n表示这次更改的范围（可选）：',
		customScope: '表示此次更改的范围：',
		subject: '对这次更改写一句简短的描述：\n',
		body: '提供更改的详细说明（可选）。使用“|”换行\n',
		breaking: '列出所有重大变化（可选）：\n',
		footer: '列出因本次改动而关闭的问题（可选）。 示例：#31, #34：\n',
		confirmCommit: '是否确定要继续执行上面的提交？',
	},

	// 允许自定义范围。
	allowCustomScopes: true,
	// 允许显示重大变化的类型。
	allowBreakingChanges: ['功能', '修复', '优化'],
	// 跳过问题。
	// skipQuestions: ['body'],

	// 第一行的最大长度？
	subjectLimit: 1000,
	// breaklineChar: '|', // It is supported for fields body and footer.
	// footerPrefix : 'ISSUES CLOSED:'
	// askForBreakingChangeFirst : true, // default is false
};
