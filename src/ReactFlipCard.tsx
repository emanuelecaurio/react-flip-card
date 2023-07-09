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
    containerStyle?: React.CSSProperties,
    containerCss?: string,
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
            return 'ReactFlipCard__rotateX180Deg';
        case Direction.horizontal:
            return 'ReactFlipCard__rotateY180Deg';
        case Direction.diagonal:
            return 'ReactFlipCard__rotateDiagonal';
        default:
            return 'ReactFlipCard__rotateY180Deg';
    }
}

export default function ReactFlipCard(
    {
        containerStyle = {},
        containerCss = '',
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
            style={containerStyle}
            className={`ReactFlipCard__container ${containerCss} `}
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
                className={`ReactFlipCard__flipCard ${flipCardCss} ${isFlipped ? getDirectionCssClass(direction) : ''}`}
                style={flipCardStyle}>
                <div
                    className={`ReactFlipCard__flipCardFront ${frontCss}`}
                    style={frontStyle}>
                    {frontComponent}
                </div>
                <div className={`ReactFlipCard__flipCardBack ${backCss} ${getDirectionCssClass(direction)}`
                } style={backStyle}>
                    {backComponent}
                </div>
            </div>
        </div>

    )
}