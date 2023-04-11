// components
import { Input } from '../Input/Input';
import { Spinner } from '../../components/Spinner/Spinner';
import { Status } from '../Status/Status';
import { MemoizedButtonForm } from '../Buttons/ButtonLogin/ButtonForm';
// material ui
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../styles/theme';
// hooks
import { useFormSearch } from '../../hooks/useFormSearch';

const StyledForm = styled(Box)(() => ({
  maxWidth: '400px',
}));

const FormBody = styled(Stack)(() => ({
  gap: '32px',
}));

const FormBodyInputs = styled(Stack)(() => ({
  gap: '24px',
}));

const FormBodyFooter = styled(Stack)(() => ({
  gap: '16px',
}));

export const FormSearch: React.FC = () => {
  console.log('FormSearch render');
  const { isLoading, error, query, handleChangeQuery, handleSearch } = useFormSearch();

  if (isLoading) return <Spinner />;

  return (
    <StyledForm>
      <form onSubmit={(event: React.ChangeEvent<HTMLFormElement>) => handleSearch(event)}>
        <FormBody>
          {error instanceof Error && (
            <Status text={error.message} color={theme.palette.error.light} />
          )}
          <FormBodyInputs>
            <Input
              label="search"
              variant="outlined"
              name="search"
              type="search"
              value={query}
              onChange={handleChangeQuery}
            />
          </FormBodyInputs>
          <FormBodyFooter>
            <MemoizedButtonForm
              type={'submit'}
              text={'search'}
              disabled={query !== '' ? false : true}
            />
          </FormBodyFooter>
        </FormBody>
      </form>
    </StyledForm>
  );
};
