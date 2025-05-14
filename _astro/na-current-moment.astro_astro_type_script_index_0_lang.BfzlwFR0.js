import{c as e,i as t}from"./lit.DvjAYmxF.js";import{t as n}from"./base.ZLIJZ3E1.js";import{i as r,r as i,t as a}from"./decorate.7JDg8HTF.js";var o=class extends n{refresh(){let e=new Date;this.date=e.toLocaleDateString(this.locales,{month:`long`,day:`numeric`}),this.time=e.toLocaleTimeString(this.locales,{hour:`2-digit`,minute:`2-digit`}),this.weekday=e.toLocaleDateString(this.locales,{weekday:`long`}),this.requestUpdate()}constructor(){super(),this.date=``,this.time=``,this.weekday=``,this.locales=`zh-CN`}connectedCallback(){super.connectedCallback(),this.refresh(),this.timer=window.setInterval(()=>this.refresh(),6e4)}disconnectedCallback(){super.disconnectedCallback(),this.timer&&clearInterval(this.timer)}render(){return t`
            <section class="na-paragraph">
                <span class="date">${this.date}</span>
                <span class="weekday">${this.weekday}</span>
            </section>
            <section class="na-paragraph time" data-size="1">
                ${this.time}
            </section>
        `}static{this.styles=e`
        :host {
            display: inline-grid;
        }

        :host([data-primary]) {
            color: oklch(var(--color-current-moment, var(--primary-7)));
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
    `}};a([i({attribute:`locales`,type:String})],o.prototype,`locales`,void 0),o=a([r(`na-current-moment`)],o);