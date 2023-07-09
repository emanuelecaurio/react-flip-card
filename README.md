# ReactJsFlipCard
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/reactjs-flip-card?color=g">

* Highly customizable flip card</li>
* Diagonal flip support</li>
* [Small bundle size](https://bundlephobia.com/package/reactjs-flip-card)</li>

**works with**: `React >= 16.8`

important! Changed some props from version 2.x.x.
Starting from version 2, there will be **no CSS conflicts** thanks to `:where` and `module.css`.
<br/>
More about
[Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#how_is_specificity_calculated),
[the :where exception](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#the_where_exception) and
[css modules](https://css-tricks.com/css-modules-part-1-need/)

## Getting Started

You can install the module via `npm` or `yarn`:

```sh
npm install reactjs-flip-card
```

```sh
yarn add reactjs-flip-card
```

## Demo
[Live Demo](https://react-flip-card-demo.surge.sh/)

## Project Structure
The project includes a demo folder initialized with Create React App.

When you run the command ```build``` from reactjs-flip-card ```package.json```, a ```dist``` and a ```lib``` folder will be generated.

The ```lib``` folder will be placed automatically into the demo project.

You can move into ```demo``` directory and ```start``` project from its own package.json script, just like any other Create React App.

## Usage

You can pass style or CSS classes through props.
~~Note that the style is the one that will have the highest priority.~~ (Not true for version 2.x.x. You can pass your custom classNames and they will get higher priority).

Please do not pass `background` or `backgroundColor` property into `flipCardStyle` as it may cause unexpected behaviours 
on different browsers. Use the props `frontStyle` and `backStyle`
and pass the same style. You could have also used `frontCss` and `backCss` passing your custom classes
```js
import ReactFlipCard from 'reactjs-flip-card'

function App() {
    
    const styles = {
        card: {background: 'blue', color: 'white', borderRadius: 20,},
    }
    
    return (
        <ReactFlipCard
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={<div>Hover me!</div>}
            backComponent={<div>Back!</div>}
        />
    );
}
```

More examples on `demo/src/App.js`

## Props V2.x.x

|Name|Type|Default|Description|
|:--|:--:|:-----:|:----------|
|**containerStyle**|<code>CSSProperties</code>|`{}`|The ```style``` of the div container|
|**containerCss**|<code>string</code>|`''`|The additional ```className``` of the div container|
|**flipCardStyle**|<code>CSSProperties</code>|`{}`|The ```style``` of the card itself. Important: please do not pass `background` or background color property here as it may cause unexpected behaviours on different browsers. Use the props `frontStyle` and `backStyle` and pass the same style there|
|**flipCardCss**|<code>string</code>|`''`|The additional ```className``` of the card itself. Important: please do not pass `background` or `background-color` property here as it may cause unexpected behaviours on different browsers. Use the props `frontCss` and `backCss` and pass the same css there |
|**frontStyle**|<code>CSSProperties</code>|`{}`|The ```style``` of the front card|
|**frontCss**|<code>string</code>|`''`|The additional ```className``` of the front card|
|**backStyle**|<code>CSSProperties</code>|`{}`|The ```style``` of the back card|
|**backCss**|<code>string</code>|`''`|The additional ```className``` of the back card|
|**direction**|<code>'vertical'&#124;</code><br/><code>'horizontal'&#124;</code><br/><code>'diagonal'</code>|`horizontal`|The direction of the flip card|
|**flipTrigger**|<code>'onClick'&#124;</code><br/><code>'onHover'&#124;</code><br/><code>'disabled'&#124;</code>|`'onHover'`|The event that trigger the flip|
|**flipByProp**|<code>boolean&#124;</code><br/><code>undefined</code>|`undefined`|Eventually handle flip from boolean prop. Eventually you can set `flipTrigger` to `'disabled'` if this prop is enabled|
|**frontComponent**|<code>ReactNode</code>|`required`|Any JSX Component|
|**backComponent**|<code>ReactNode</code>|`required`|Any JSX Component|
|**onClick**|<code>MouseEventHandler</code>|`_=>un...ed`|Any callback assigned to the onClick event. This event relates to the card container|
|**onMouseEnter**|<code>MouseEventHandler</code>|`_=>un...ed`|Any callback assigned to the onMouseEnter event. This event relates to the card container|
|**onMouseLeave**|<code>MouseEventHandler</code>|`_=>un...ed`|Any callback assigned to the onMouseLeave event. This event relates to the card container|

## Props V1.x.x

**width** | **height** | **cursor**: removed in version 2. Optionally Pass them into `containerStyle` or`containerCss` for version 2. Same default values

**flipCardContainerStyle** : renamed as `containerStyle` in version 2

**flipCardContainerCss** : renamed as `containerCss` in version 2

**transitionDuration** : removed in version 2. Optionally Pass it into `flipCardStyle` or `flipCardCss`. Same default value


|Name|Type|Default|Description|
|:--|:--:|:-----:|:----------|
|**width**|<code>CSSProperties</code>|`'100px'`| The width of the div container|
|**height**|<code>CSSProperties</code>|`'100px'`|The height of the div container|
|**cursor**|<code>CSSProperties</code>|`'default'`|The cursor type that appear when mouse hover the div container|
|**transitionDuration**|<code>CSSProperties</code>|`'0.5s'`|The transition duration of the div container|
|**flipCardContainerStyle**|<code>CSSProperties</code>|`{}`|The ```style``` of the div container|
|**flipCardContainerCss**|<code>string</code>|`''`|The additional ```className``` of the div container|
|**flipCardStyle**|<code>CSSProperties</code>|`{}`|The ```style``` of the card itself. Important: please do not pass `background` or background color property here as it may cause unexpected behaviours on different browsers. Use the props `frontStyle` and `backStyle` and pass the same style there|
|**flipCardCss**|<code>string</code>|`''`|The additional ```className``` of the card itself. Important: please do not pass `background` or `background-color` property here as it may cause unexpected behaviours on different browsers. Use the props `frontCss` and `backCss` and pass the same css there |
|**frontStyle**|<code>CSSProperties</code>|`{}`|The ```style``` of the front card|
|**frontCss**|<code>string</code>|`''`|The additional ```className``` of the front card|
|**backStyle**|<code>CSSProperties</code>|`{}`|The ```style``` of the back card|
|**backCss**|<code>string</code>|`''`|The additional ```className``` of the back card|
|**direction**|<code>'vertical'&#124;</code><br/><code>'horizontal'&#124;</code><br/><code>'diagonal'</code>|`horizontal`|The direction of the flip card|
|**flipTrigger**|<code>'onClick'&#124;</code><br/><code>'onHover'&#124;</code><br/><code>'disabled'&#124;</code>|`'onHover'`|The event that trigger the flip|
|**flipByProp**|<code>boolean&#124;</code><br/><code>undefined</code>|`undefined`|Eventually handle flip from boolean prop. Eventually you can set `flipTrigger` to `'disabled'` if this prop is enabled|
|**frontComponent**|<code>ReactNode</code>|`required`|Any JSX Component|
|**backComponent**|<code>ReactNode</code>|`required`|Any JSX Component|
|**onClick**|<code>MouseEventHandler</code>|`_=>un...ed`|Any callback assigned to the onClick event. This event relates to the card container|
|**onMouseEnter**|<code>MouseEventHandler</code>|`_=>un...ed`|Any callback assigned to the onMouseEnter event. This event relates to the card container|
|**onMouseLeave**|<code>MouseEventHandler</code>|`_=>un...ed`|Any callback assigned to the onMouseLeave event. This event relates to the card container|

<br/>

## Contributing and Support
Contributions of any kind are welcome.

If this package was helpful to you, please consider putting a star on the GitHub project.

## License
MIT
