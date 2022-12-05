# ReactFlipCard
Highly customizable flip card

## Demo
[Live Demo](https://react-flip-card-demo.surge.sh/)

## Project Structure
The project includes a demo folder initialized with Create React App.

When you run the command ```build``` from react-flip-card ```package.json```, a ```dist``` and a ```lib``` folder will be generated.

The ```lib``` folder will be placed automatically into the demo project.

You can move into ```demo``` directory and ```start``` project from its own package.json script, just like any other Create React App.

## Usage

You can pass style or CSS classes through props. Note that the style is the one that will have the highest priority.
```js
import ReactFlipCard from 'react-flip-card'

function App() {
    
    const styles = {
        card: {background: 'blue', color: 'white', borderRadius: 20,},
    }
    
    return (
        <ReactFlipCard
            flipCardStyle={styles.card}
            frontComponent={<div>Hover me!</div>}
            backComponent={<div>Back!</div>}
        />
    );
}
```
More examples on `demo/src/App.js`
## Props

|Name|Type|Default|Description|
|:--|:--:|:-----:|:----------|
|**width**|<code>React.CSSProperties["width"]</code>|`'100px'`|The width of the div container|
|**height**|<code>React.CSSProperties["height"]</code>|`'100px'`|The height of the div container|
|**cursor**|<code>React.CSSProperties["cursor"]</code>|`'default'`|The cursor type that appear when mouse hover the div container|
|**transitionDuration**|<code>React.CSSProperties["transitionDuration"]</code>|`'0.5s'`|The transition duration of the div container|
|**flipCardContainerStyle**|<code>React.CSSProperties</code>|`{}`|The ```style``` of the div container|
|**flipCardContainerCss**|<code>string</code>|`''`|The additional ```className``` of the div container|
|**flipCardStyle**|<code>React.CSSProperties</code>|`{}`|The ```style``` of the card itself|
|**flipCardCss**|<code>string</code>|`''`|The additional ```className``` of the card itself|
|**frontStyle**|<code>React.CSSProperties</code>|`{}`|The ```style``` of the front card|
|**frontCss**|<code>string</code>|`''`|The additional ```className``` of the front card|
|**backStyle**|<code>React.CSSProperties</code>|`{}`|The ```style``` of the back card|
|**backCss**|<code>string</code>|`''`|The additional ```className``` of the back card|
|**direction**|<code>'vertical' | 'horizontal'</code>|`'horizontal'`|The direction of the flip card|
|**flipTrigger**|<code>'onClick' | 'onHover' | 'disabled' | undefined</code>|`'onHover'`|The event that trigger the flip|
|**flipByProp**|<code>boolean | undefined</code>|`undefined`|Eventually handle flip from boolean prop. Eventually you can set `flipTrigger` to `'disabled'` if this prop is enabled|
|**frontComponent**|<code>React.ReactNode</code>|`<div>Front</div>`|Any JSX Component|
|**backComponent**|<code>React.ReactNode</code>|`<div>Back</div>`|Any JSX Component|
|**onClick**|<code>React.MouseEventHandler<HTMLDivElement></code>|`() => undefined`|Any callback assigned to the onClick event. This event relates to the card container|
|**onMouseEnter**|<code>React.MouseEventHandler<HTMLDivElement></code>|`() => undefined`|Any callback assigned to the onMouseEnter event. This event relates to the card container|
|**onMouseLeave**|<code>React.MouseEventHandler<HTMLDivElement></code>|`() => undefined`|Any callback assigned to the onMouseLeave event. This event relates to the card container|


## Contributing and Support
Contributions of any kind are welcome.

If this package was helpful to you, please consider putting a star on the GitHub project.

Also, you can follow me on my [Instagram personal blog](https://www.instagram.com/minudaje/) where I share software related content and music
## License
MIT

## Personal Blog

