import $ from 'jquery'
import './app1.css'
import Model from './base/Model.js'
import View from './base/View.js'
import EventBus from './base/EventBus'

// 数据相关都放到 m
const m = new Model({
	data: {
		n: parseFloat(localStorage.getItem('n')),
	},
	update: function (data) {
		Object.assign(m.data, data)
		m.trigger('m:update')
		localStorage.setItem('n', m.data.n)
	},
})

const init = (el) => {
	new View({
		el: el,
		data: m.data,
		EventBus: EventBus,
		html: `
			<div>
				<div class="output">
					<span id="number">{{n}}</span>
				</div>
				<div class="action">
					<button id="plus1">+1</button>
					<button id="minus1">-1</button>
					<button id="mul2">*2</button>
					<button id="divide2">÷2</button>
				</div>
			</div>
		`,
		render(data) {
			const n = data.n
			if (this.el.children.length !== 0) this.el.empty()
			$(this.html.replace('{{n}}', n)).appendTo(this.el)
		},
		events: {
			'click #plus1': 'plus',
			'click #minus1': 'minus',
			'click #mul2': 'mul',
			'click #divide2': 'divide',
		},
		plus() {
			m.update({ n: m.data.n + 1 })
		},
		minus() {
			m.update({ n: m.data.n - 1 })
		},
		mul() {
			m.update({ n: m.data.n * 2 })
		},
		divide() {
			m.update({ n: m.data.n / 2 })
		},
	})
}

export default init
