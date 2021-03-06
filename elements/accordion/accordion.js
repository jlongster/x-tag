
xtag.register('accordion', {
	events: {
		'click:delegate(x-toggler)': function(event){
			this.xtag.selectToggler();
		}
	},
	methods: {
		getSelectedIndex: function(){
			return xtag.query(this, 'x-toggler').indexOf(this.querySelector('x-toggler[selected="true"]'));
		},
		getSelectedToggler: function(){
			return xtag.query(this, 'x-toggler[selected="true"]')[0];
		},
		nextToggler: function(){
			var togglers = xtag.query(this.parentNode, 'x-toggler');
			if (togglers[0]) (togglers[this.xtag.getSelectedIndex() + 1] || togglers[0]).xtag.selectToggler();
		},
		previousToggler: function(){
			var togglers = xtag.query(this.parentNode, 'x-toggler');
			if (togglers[0]) (togglers[this.xtag.getSelectedIndex() - 1] || togglers.pop()).xtag.selectToggler();
		}
	}
});

xtag.register('toggler', {
	methods: {
		selectToggler: function(){
			xtag.query(this.parentNode, 'x-toggler').forEach(function(el){
				el.setAttribute('selected', el == this ? true : null);
			}, this);
		}
	}
});