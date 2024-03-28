import Link from 'next/link';
import Image from "next/image";

interface CardsProps {
    item: {
        imageUrl: string;
        title: string;
    };
    id: number;
}

export const Cards: React.FC<CardsProps> = ({ item, id }) => {
    return (
        <div className="card" style={{
            width: '423px',
            height: '450px',
            borderRadius: '0px',
            background: '#112B3E'
        }}>
            <Link href={`/pages/articles/${id}`}>
                <Image className="card__img" src={item.imageUrl} width={420} height={220} alt="Card image cap" />
            </Link>
            <div className="card-body">
                <p className="card-text">{item.title}</p>
            </div>
        </div>
    );
};
