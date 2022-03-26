import { Stack, Button} from '@mui/material';

interface NumPadProps {
    handleClick: (x: string) => void,
    handleClear: () => void
}

export const NumPad = (props: NumPadProps) => {
    const { handleClick, handleClear } = props;
  return (
    <Stack data-cy='num-pad'>
        <Stack direction='row'>
            <Button variant='outlined' disableElevation onClick={() => handleClick('7')}>7</Button>
            <Button variant='outlined' disableElevation onClick={() => handleClick('8')}>8</Button>
            <Button variant='outlined' disableElevation onClick={() => handleClick('9')}>9</Button>
        </Stack>
        <Stack direction='row'>
            <Button variant='outlined' disableElevation onClick={() => handleClick('4')}>4</Button>
            <Button variant='outlined' disableElevation onClick={() => handleClick('5')}>5</Button>
            <Button variant='outlined' disableElevation onClick={() => handleClick('6')}>6</Button>
        </Stack>
        <Stack direction='row'>
            <Button variant='outlined' disableElevation onClick={() => handleClick('1')}>1</Button>
            <Button variant='outlined' disableElevation onClick={() => handleClick('2')}>2</Button>
            <Button variant='outlined' disableElevation onClick={() => handleClick('3')}>3</Button>
        </Stack>
        <Stack direction='row'>
            <Button variant='outlined' disableElevation onClick={() => handleClick('.')}>.</Button>
            <Button variant='outlined' disableElevation onClick={() => handleClick('0')}>0</Button>
            <Button variant='outlined' disableElevation onClick={() => handleClear()}>C</Button>
        </Stack>
        </Stack>
  )
}
