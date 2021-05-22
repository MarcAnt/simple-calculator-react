import React from 'react'
import { Button, ButtonClear, ButtonEqueal, ButtonOperator, KeysWrapper} from '../Styles/CalculatorStyles'

const Keys = ({handleClick}) => {
    return (
        <KeysWrapper>
            <ButtonClear type="button" value={'C'}  onClick={ (e) => handleClick(e)} />
            <ButtonOperator type="button" value={'DEL'}  onClick={ (e) => handleClick(e)} />
            <ButtonOperator type="button" value={'/'}  onClick={ (e) => handleClick(e)} />

            <Button type="button" data-num value={'7'}  onClick={ (e) => handleClick(e)} />
            <Button type="button" data-num value={'8'} onClick={ (e) => handleClick(e)} />
            <Button type="button" data-num value={'9'}  onClick={ (e) => handleClick(e)} />
            <ButtonOperator type="button" value={'*'}  onClick={ (e) => handleClick(e)} />

            <Button type="button" data-num value={'4'}  onClick={ (e) => handleClick(e)} />
            <Button type="button" data-num value={'5'}  onClick={ (e) => handleClick(e)} />
            <Button type="button" data-num value={'6'}  onClick={ (e) => handleClick(e)} />
            <ButtonOperator type="button" value={'-'}  onClick={ (e) => handleClick(e)} />

            <Button type="button" data-num value={'1'}  onClick={ (e) => handleClick(e)} />
            <Button type="button" data-num value={'2'}  onClick={ (e) => handleClick(e)} />
            <Button type="button" data-num value={'3'}  onClick={ (e) => handleClick(e)} />
            <ButtonOperator type="button" value={'+'} onClick={ (e) => handleClick(e)} />

            <Button type="button" data-num value={'0'}  onClick={ (e) => handleClick(e)} />
            <Button type="button" data-num value={'.'}  onClick={ (e) => handleClick(e)} />
            <ButtonEqueal type="button" value={'='} onClick={ (e) => handleClick(e)} />
        </KeysWrapper>
    )
}
export default Keys;