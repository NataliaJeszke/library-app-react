import bookComponentStyle from './BookComponentStyle.module.css'

export function BookComponent({item}) {
  return (
    <>
      <th>title</th>
      <th>{item.title}</th>
    
      </>
  );
}
