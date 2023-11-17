import { useJsonFetch } from '../../hooks/useJsonFetch';

export const DataComponent = () => {
    const { data, loading, error } = useJsonFetch(import.meta.env.VITE_DATA_URL, []);
    return (
        <div>
            <h3>Успешное получение данных</h3>
            {loading ? <p>Loading...</p> : <p>{data.status}</p>}
            {error && <p>{error}</p>}
        </div>
    );
}
