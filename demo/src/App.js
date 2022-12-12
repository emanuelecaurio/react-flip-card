import React, {useState} from "react";
import image from "./img.png"
import ReactFlipCard from "./lib";

function App() {
    const styles = {
        container: {padding: 20},
        subTitle: {
            fontSize: "1.5rem", fontWeight: "bold",
            marginBottom: 10, textAlign: "center"
        },
        sectionExample: {
            background: "#f1f1f1",
            margin: 20,
            padding: 20,
            borderRadius: 20
        },
        textAlignCenter: {textAlign: "center"},
        fontStyleItalic: {fontStyle: "italic"},
        flex: {display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10},
        card: {background: '#00b3ad', color: 'white', borderRadius: 20,},
        marginTop10: {padding: 10},
        marginBottom10: {marginBottom: 10},
        padding10: {padding: 10},
        padding20: {padding: 20},
        fontSize1rem: {fontSize: "1rem"},
        size200: {height: 200, width: 200},
        fontWeightBold: {fontWeight: "bold"},
        backgroundOrange: {background: "orange"},
        centeredContent: {display: 'flex', justifyContent: 'center', alignItems: 'center'}
    }
    const [optionalToggle, setOptionalToggle] = useState(false)
    return (
        <div style={styles.container}>
            <div style={styles.textAlignCenter}>
                <h1>React Flip Card Demo</h1>
                <div style={styles.fontStyleItalic}>Highly customizable flip card</div>
            </div>
            <div style={styles.sectionExample}>
                <div style={styles.subTitle}> Flip cards
                    <span style={styles.fontSize1rem}> (default width and height 100px)</span>
                </div>
                <div style={{...styles.flex, ...styles.textAlignCenter}}>
                    <ReactFlipCard
                        cursor={"pointer"}
                        flipTrigger={"onClick"}
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        frontComponent={<div style={styles.padding10 }>Click me!</div>}
                        backComponent={<div style={styles.padding10}>Back! </div>}
                    />
                    <ReactFlipCard
                        cursor={"pointer"}
                        flipTrigger={"onClick"}
                        direction={"vertical"}
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        frontComponent={<div style={styles.padding10}>Click me! Vertical</div>}
                        backComponent={<div style={styles.padding10}>Back! </div>}
                    />
                    <ReactFlipCard
                        cursor={"pointer"}
                        flipTrigger={"onClick"}
                        direction={"diagonal"}
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        frontComponent={<div style={styles.padding10}>Click me! Diagonal</div>}
                        backComponent={<div style={styles.padding10}>Back! </div>}
                    />
                    <ReactFlipCard
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        frontComponent={<div style={styles.padding10}>Hover me!</div>}
                        backComponent={<div style={styles.padding10}>Back! </div>}
                    />
                    <ReactFlipCard
                        direction={"vertical"}
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        frontComponent={<div style={styles.padding10}>Hover me! Vertical</div>}
                        backComponent={<div style={styles.padding10}>Back! </div>}
                    />
                    <ReactFlipCard
                        direction={"diagonal"}
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        frontComponent={<div style={styles.padding10}>Hover me! Diagonal</div>}
                        backComponent={<div style={styles.padding10}>Back! </div>}
                    />
                </div>
            </div>
            <div style={styles.sectionExample}>
                <div style={styles.subTitle}> Flip cards Resized based on parent
                    size
                </div>
                <div style={{...styles.flex, ...styles.textAlignCenter}}>
                    <div style={styles.size200}>
                        <ReactFlipCard
                            width={"100%"}
                            height={"100%"}
                            frontStyle={styles.card}
                            backStyle={styles.card}
                            frontComponent={<div style={styles.padding10}>Hover me! I am a resized card</div>}
                            backComponent={<div style={styles.padding10}>Back!</div>}
                        />
                    </div>
                    <div style={{width: 100, height: 200}}>
                        <ReactFlipCard
                            width={"100%"}
                            height={"100%"}
                            frontStyle={styles.card}
                            backStyle={styles.card}
                            frontComponent={<div style={styles.padding10}>Hover me! I am a resized card</div>}
                            backComponent={<div style={styles.padding10}>Back!</div>}
                        />
                    </div>
                    <div style={{width: 200, height: 100}}>
                        <ReactFlipCard
                            width={"100%"}
                            height={"100%"}
                            frontStyle={styles.card}
                            backStyle={styles.card}
                            frontComponent={<div style={styles.padding10}>Hover me! I am a resized card</div>}
                            backComponent={<div style={styles.padding10}>Back!</div>}
                        />
                    </div>
                </div>
            </div>
            <div style={styles.sectionExample}>
                <div style={styles.subTitle}> Flip cards based on external boolean condition
                </div>
                <div style={styles.textAlignCenter}>
                    <button
                        onClick={() => setOptionalToggle(!optionalToggle)}
                        style={{...styles.fontWeightBold, ...styles.marginBottom10}}>
                        CLICK HERE TO FLIP!
                    </button>
                </div>
                <div style={{...styles.flex, ...styles.textAlignCenter}}>
                    <ReactFlipCard
                        flipByProp={optionalToggle}
                        flipTrigger={"disabled"}
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        frontComponent={<div style={styles.padding10}>You can't click me!</div>}
                        backComponent={<div style={styles.padding10}>Back! </div>}
                    />
                    <ReactFlipCard
                        flipByProp={optionalToggle}
                        flipTrigger={"disabled"}
                        direction={"vertical"}
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        frontComponent={<div style={styles.padding10}>You can't click me!</div>}
                        backComponent={<div style={styles.padding10}>Back! </div>}
                    />
                    <ReactFlipCard
                        flipByProp={optionalToggle}
                        flipTrigger={"disabled"}
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        frontComponent={<div style={styles.padding10}>You can't hover me!</div>}
                        backComponent={<div style={styles.padding10}>Back! </div>}
                    />
                    <ReactFlipCard
                        flipByProp={optionalToggle}
                        flipTrigger={"disabled"}
                        direction={"vertical"}
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        frontComponent={<div style={styles.padding10}>You can't hover me!</div>}
                        backComponent={<div style={styles.padding10}>Back! </div>}
                    />
                </div>
            </div>
            <div style={styles.sectionExample}>
                <div style={styles.subTitle}>Flip cards styled with CSS</div>
                <div style={{...styles.flex, ...styles.textAlignCenter}}>
                    <ReactFlipCard
                        direction={"vertical"}
                        frontCss={'flipCardExample'}
                        backCss={'flipCardExample'}
                        frontComponent={<div>CSS Card</div>}
                        backComponent={<div>Back!</div>}
                    />
                    <ReactFlipCard
                        frontCss={'flipCardExample'}
                        backCss={'flipCardExample'}
                        frontComponent={<div>CSS Card</div>}
                        backComponent={<div>Back!</div>}
                    />
                </div>
            </div>
            <div style={styles.sectionExample}>
                <div style={styles.subTitle}>Trigger events on click or on hover</div>
                <div style={{...styles.flex, ...styles.textAlignCenter}}>
                    <ReactFlipCard
                        direction={"vertical"}
                        cursor={"pointer"}
                        flipTrigger={"onClick"}
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        onClick={() => alert("you clicked me!")}
                        frontComponent={
                            <div>
                                Click me!
                            </div>
                        }
                        backComponent={<div>Back!</div>}
                    />
                    <ReactFlipCard
                        direction={"vertical"}
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        onMouseEnter={() => alert("mouse entered!")}
                        frontComponent={
                            <div>
                                Hover me!
                            </div>
                        }
                        backComponent={<div>Back!</div>}
                    />
                </div>
            </div>
            <div style={styles.sectionExample}>
                <div style={styles.subTitle}>Override current CSS properties with style</div>
                <div style={{...styles.flex, ...styles.textAlignCenter}}>
                    <ReactFlipCard
                        direction={"vertical"}
                        cursor={"pointer"}
                        flipTrigger={"onClick"}
                        flipCardContainerStyle={{userSelect: 'initial'}}
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        frontComponent={<div>You can select my text now.</div>}
                        backComponent={<div>Back!</div>}
                    />
                </div>
            </div>
            <div style={styles.sectionExample}>
                <div style={styles.subTitle}>Flip Card Centered Content on a fixed card size</div>
                <div style={{...styles.flex, ...styles.textAlignCenter}}>
                    <ReactFlipCard
                        width={200}
                        frontStyle={{...styles.card, ...styles.centeredContent}}
                        backStyle={{ ...styles.card,...styles.centeredContent}}
                        frontComponent={<div>I am a centered text!</div>}
                        backComponent={<div>Me too!</div>}
                    />
                </div>
            </div>
            <div style={styles.sectionExample}>
                <div style={styles.subTitle}>Flip Card Resized based on back component size</div>
                <div style={{...styles.flex, ...styles.textAlignCenter}}>
                    <ReactFlipCard
                        width={"auto"}
                        height={"auto"}
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        frontComponent={<div/>}
                        backComponent={<div style={styles.padding20}>This is the content!</div>}
                    />
                </div>
            </div>
            <div style={styles.sectionExample}>
                <div style={styles.subTitle}>Flip Card with higher transition duration</div>
                <div style={{...styles.flex, ...styles.textAlignCenter}}>
                    <ReactFlipCard
                        transitionDuration={'2s'}
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        frontComponent={<div>I am slow.</div>}
                        backComponent={<div style={styles.padding20}>Very slow.</div>}
                    />
                </div>
            </div>
            <div style={styles.sectionExample}>
                <div style={styles.subTitle}>Flip Card Front/Back different styles</div>
                <div style={{...styles.flex, ...styles.textAlignCenter}}>
                    <ReactFlipCard
                        frontStyle={{...styles.card, background: "orange"}}
                        backStyle={{...styles.card, background: "blue"}}
                        frontComponent={<div>I am orange</div>}
                        backComponent={<div >I am blue</div>}
                    />
                </div>
            </div>
            <div style={styles.sectionExample}>
                <div style={styles.subTitle}>Flip card contains Flip Card</div>
                <div style={{...styles.flex, ...styles.textAlignCenter}}>
                    <ReactFlipCard
                        direction={"vertical"}
                        cursor={"pointer"}
                        flipTrigger={"onClick"}
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        frontComponent={
                            <div>
                                You can click me
                                <ReactFlipCard
                                    width={50}
                                    height={30}
                                    frontStyle={{...styles.card, ...styles.backgroundOrange}}
                                    backStyle={{...styles.card, ...styles.backgroundOrange}}
                                    frontComponent={<div>Cool!</div>}
                                    backComponent={<div>Ok!</div>}
                                />
                            </div>
                        }
                        backComponent={<div>Back!</div>}
                    />
                </div>
            </div>
            <div style={styles.sectionExample}>
                <div style={styles.subTitle}>Pass literally anything you want</div>
                <div style={{...styles.flex, ...styles.textAlignCenter}}>
                    <ReactFlipCard
                        frontStyle={styles.card}
                        backStyle={styles.card}
                        frontComponent={<img width={100} src={image} height={100} alt={""}/>}
                        backComponent={<div >back</div>}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
