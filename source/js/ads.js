function append(element, params)
{
   params.map(function (item)
   {
      element.appendChild(item);
   })
}
function create(element, params)
{
   var out = document.createElement(element);

   if(params['class'])
      out.className = params['class'];

   if(params['html'])
      out.innerHTML = params['html'];

   if(params['text'])
      out.innerText = params['text'];

   if(params['mouseover'])
      out.onmouseover = params['mouseover'];

   if(params['mouseout'])
      out.onmouseout = params['mouseout'];

   if(params['style'])
   {
      Object.keys(params['style']).map(function(key)
      {
         out.style[key] = params['style'][key];
      });
   }

   if(params['attr'])
   {
      Object.keys(params['attr']).map(function(key)
      {
         out.setAttribute(key, params['attr'][key])
      });
   }

   return out;
}

var ads 	= create('div', {
    style		: {
       left		: 0,
       zIndex		: 10,
       bottom		: 0,
       padding		: '1rem',
       opacity		: '.5',
       position	: 'fixed',
       fontSize	: 0,
       transition	: '.3s',
       fontFamily	: 'Arial'
    },
    mouseover	: function()
    {
       this.style.opacity = '1';
    },
    mouseout	: function()
    {
       this.style.opacity = '0.5';
    }
 }),
 btn1 	= create('a', {
    text		: '',
    style		: {
       color			: '#333',
       cursor			: 'pointer',
       padding			: '.2rem .5rem',
       fontSize		: '12px',
       background		: '#333',
       textDecoration	: 'none'
    },
    mouseover	: function()
    {
       this.style.color 		= '#333';
       this.style.background 	= '#333';
    },
    mouseout	: function()
    {
       this.style.color 		= '#333';
       this.style.background 	= '#333';
    }
 }),
 btn2 	= create('a', {
    text		: 'Buy Me A Coffee',
    style		: {
       color			: '#fff',
       cursor			: 'pointer',
       padding			: '.2rem .5rem',
       fontSize		: '12px',
       background		: '#333',
       textDecoration	: 'none'
    },
    attr		: {
       href	: '//www.buymeacoffee.com/8l1UbBwNc',
       target	: '_blank'
    },
    mouseover	: function()
    {
       this.style.color 		= '#333';
       this.style.background 	= '#fff';
    },
    mouseout	: function()
    {
       this.style.color 		= '#fff';
       this.style.background 	= '#333';
    }
 })
 ;

append(ads, [btn1, btn2]);

document.body.appendChild(ads);