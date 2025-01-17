import { useEffect } from 'react';
export default function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    console.log(prevTitle);
    document.title = title; //실제로 title 변경됨
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
