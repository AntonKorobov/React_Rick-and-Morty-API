import { useSelector } from 'react-redux';
import { RootState } from 'store';

export function useGlobalStateSelector() {
  return { ...useSelector((state: RootState) => state) };
}
