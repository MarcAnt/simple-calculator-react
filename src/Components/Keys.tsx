import React from 'react'
import { Button, ButtonClear, ButtonEqueal, ButtonOperator, KeysWrapper} from '../Styles/CalculatorStyles'

interface IProps {
    handleClick: (e: string) => void;
}

const Keys: React.FC<IProps> = ({handleClick}) => {
    return (
        <KeysWrapper>
            <ButtonClear type="button" value={'C'}  onClick={ () => handleClick('C')} />
            <ButtonOperator type="button" value={'DEL'}  onClick={ () => handleClick('DEL')} />
            <ButtonOperator type="button" value={'/'}  onClick={ () => handleClick('/')} />

            <Button type="button" data-num value={'7'}  onClick={ () => handleClick('7')} />
            <Button type="button" data-num value={'8'} onClick={ () => handleClick('8')} />
            <Button type="button" data-num value={'9'}  onClick={ () => handleClick('9')} />
            <ButtonOperator type="button" value={'*'}  onClick={ () => handleClick('*')} />

            <Button type="button" data-num value={'4'}  onClick={ () => handleClick('4')} />
            <Button type="button" data-num value={'5'}  onClick={ () => handleClick('5')} />
            <Button type="button" data-num value={'6'}  onClick={ () => handleClick('6')} />
            <ButtonOperator type="button" value={'-'}  onClick={ () => handleClick('-')} />

            <Button type="button" data-num value={'1'}  onClick={ () => handleClick('1')} />
            <Button type="button" data-num value={'2'}  onClick={ () => handleClick('2')} />
            <Button type="button" data-num value={'3'}  onClick={ () => handleClick('3')} />
            <ButtonOperator type="button" value={'+'} onClick={ () => handleClick('+')} />

            <Button type="button" data-num value={'0'}  onClick={ () => handleClick('0')} />
            <Button type="button" data-num value={'.'}  onClick={ () => handleClick('.')} />
            <ButtonEqueal type="button" value={'='} onClick={ () => handleClick('=')} />
        </KeysWrapper>
    )
}
export default Keys;