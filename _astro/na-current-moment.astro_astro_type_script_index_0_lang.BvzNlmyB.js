import{N as c}from"./base.DRq99R0c.js";import{i as m,x as f}from"./lit-element.Befuxl2y.js";import{n as p,t as h}from"./property.SQfKehJm.js";var d=Object.defineProperty,y=Object.getOwnPropertyDescriptor,l=(t,a,i,r)=>{for(var e=r>1?void 0:r?y(a,i):a,s=t.length-1,o;s>=0;s--)(o=t[s])&&(e=(r?o(a,i,e):o(e))||e);return r&&e&&d(a,i,e),e};let n=class extends c{constructor(){super(),this.date="",this.time="",this.weekday="",this.locales="zh-CN"}refresh(){const t=new Date;this.date=t.toLocaleDateString(this.locales,{month:"long",day:"numeric"}),this.time=t.toLocaleTimeString(this.locales,{hour:"2-digit",minute:"2-digit"}),this.weekday=t.toLocaleDateString(this.locales,{weekday:"long"}),this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.refresh(),this.timer=window.setInterval(()=>this.refresh(),1e3*60)}disconnectedCallback(){super.disconnectedCallback(),this.timer&&clearInterval(this.timer)}render(){return f`
            <section class="na-paragraph">
                <span class="date">${this.date}</span>
                <span class="weekday">${this.weekday}</span>
            </section>
            <section class="na-paragraph time" data-size="1">
                ${this.time}
            </section>
        `}};n.styles=m`
        :host {
            display: inline-grid;
        }

        :host([data-primary]) {
            color: rgb(var(--color-current-moment, var(--primary-7)));
        }

        section.na-paragraph {
            margin: 0;
            display: flex;
            justify-content: space-evenly;
            gap: 0.5em;
        }

        .date {
            font-family: var(
                --font-family-current-moment-date,
                var(--font-family-base)
            );
        }
        .weekday {
            font-family: var(
                --font-family-current-moment-weekday,
                var(--font-family-base)
            );
        }
        .time {
            font-family: var(
                --font-family-current-moment-time,
                var(--font-family-mono)
            );
        }
    `;l([p({attribute:"locales",type:String})],n.prototype,"locales",2);n=l([h("na-current-moment")],n);
