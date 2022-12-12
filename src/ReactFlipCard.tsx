import * as React from "react";
import {useEffect, useState} from "react";
import "./ReactFlipCard.css"

enum Direction {
    'vertical' = 'vertical',
    'horizontal' = 'horizontal',
    'diagonal' = 'diagonal'
}

enum FlipTrigger {
    'onClick' = 'onClick',
    'onHover' = 'onHover',
    'disabled' = 'disabled'
}

interface FlipCardProps {
    width?: React.CSSProperties["width"],
    height?: React.CSSProperties["height"],
    cursor?: React.CSSProperties["cursor"],
    transitionDuration?: React.CSSProperties["transitionDuration"],
    flipCardContainerStyle?: React.CSSProperties,
    flipCardContainerCss?: string,
    flipCardStyle?: React.CSSProperties,
    flipCardCss?: string,
    frontStyle?: React.CSSProperties,
    frontCss?: string,
    backStyle?: React.CSSProperties,
    backCss?: string,
    direction?: 'vertical' | 'horizontal' |'diagonal',
    flipTrigger?: 'onClick' | 'onHover' | 'disabled',
    flipByProp?: boolean | undefined,
    frontComponent: React.ReactNode,
    backComponent: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
}

function getDirectionCssClass(direction: string) {
    switch (direction) {
        case Direction.vertical:
            return 'ReactFlipCard_rotateX180Deg';
        case Direction.horizontal:
            return 'ReactFlipCard_rotateY180Deg';
        case Direction.diagonal:
            return 'ReactFlipCard_rotateDiagonal';
        default:
            return 'ReactFlipCard_rotateY180Deg';
    }
}

export default function ReactFlipCard(
    {
        width = 100,
        height = 100,
        cursor = 'default',
        transitionDuration = '.5s',
        flipCardContainerStyle = {},
        flipCardContainerCss = '',
        flipCardStyle = {},
        flipCardCss = '',
        frontStyle = {},
        frontCss = '',
        backStyle = {},
        backCss = '',
        direction = Direction.horizontal,
        flipTrigger = FlipTrigger.onHover,
        flipByProp = undefined,
        frontComponent = <div>Front</div>,
        backComponent = <div>Back</div>,
        onClick = () => undefined,
        onMouseEnter = () => undefined,
        onMouseLeave = () => undefined
    }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState<boolean>(false)

    useEffect(() => {
        if (flipByProp !== undefined)
            setIsFlipped(flipByProp)
    }, [flipByProp])


    return (
        <div
            style={{width, height, cursor, ...flipCardContainerStyle}}
            className={`ReactFlipCard_flipCardContainer ${flipCardContainerCss} `}
            onMouseEnter={(e) => {
                if (flipTrigger === FlipTrigger.onHover) {
                    setIsFlipped(!isFlipped)
                }
                onMouseEnter(e)
            }}
            onMouseLeave={(e) => {
                if (flipTrigger === FlipTrigger.onHover) {
                    setIsFlipped(!isFlipped)
                }
                onMouseLeave(e)
            }}
            onClick={(e) => {
                if (flipTrigger === FlipTrigger.onClick) {
                    setIsFlipped(!isFlipped)
                }
                onClick(e)
            }}>
            <div
                className={`ReactFlipCard_flipCard ${flipCardCss} ${isFlipped ? getDirectionCssClass(direction) : ''}`}
                style={{transitionDuration, ...flipCardStyle}}>
                <div
                    className={`ReactFlipCard_flipCardFront ${frontCss}`}
                    style={{...frontStyle}}>
                    {frontComponent}
                </div>
                <div className={`ReactFlipCard_flipCardBack ${backCss} ${getDirectionCssClass(direction)}`
                } style={{...backStyle}}>
                    {backComponent}
                </div>
            </div>
        </div>

    )
}