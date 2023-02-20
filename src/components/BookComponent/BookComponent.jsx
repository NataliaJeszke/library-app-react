import bookComponentStyle from './BookComponentStyle.module.css'

export function BookComponent({item}) {
  return (
    <tr>
      <th>{item.title}</th>
      <td className={bookComponentStyle.author}>{item.author}</td>
    </tr>
  );
}
