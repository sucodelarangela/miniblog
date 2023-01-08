interface Props {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
}

const Destructuring = ({ title, content, commentsQty, tags }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.map(tag => (
          <span key={tag}>#{tag} </span>
        ))}
      </div>
    </div>
  );
};

export default Destructuring;;;