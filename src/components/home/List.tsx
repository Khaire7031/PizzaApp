import { pizzaData } from "../../data";
import useCallApi from "../../hooks/useCallApi";

interface ListProps {
    endpoint: string;
    searchQuery: string;
    visibleCount: number;
    render: (data: any) => JSX.Element;
}

export default function List({ endpoint, searchQuery, visibleCount, render }: ListProps) {
    // const data = pizzaData;
    const { data, loading, error } = useCallApi({ url: endpoint });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;


    const filteredItems = data?.filter((item: any) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto">
            {/* Render the filtered and sliced data based on visibleCount */}
            {render(filteredItems?.slice(0, visibleCount))}
        </div>
    );
}
