import { Stack, Button, ButtonGroup} from '@mui/material';

interface MathOperationsdProps {
    handleClick: (x: string) => void,
    handleEqualClick: () => void
}

export const MathOperations = (props: MathOperationsdProps) => {
    const { handleClick, handleEqualClick } = props;
  return (
    <Stack>
        <ButtonGroup>
            <Button variant='outlined' onClick={() => handleClick('+')} disableElevation>+</Button>
            <Button variant='outlined' onClick={() => handleClick('-')} disableElevation>-</Button>
            <Button variant='outlined' onClick={() => handleClick('*')} disableElevation>*</Button>
            <Button variant='outlined' onClick={() => handleClick('/')} disableElevation>/</Button>
            <Button variant='outlined' onClick={() => handleEqualClick()} disableElevation>=</Button>
        </ButtonGroup>
    </Stack>
  )
}

