import { useJsonFetch } from '../../hooks/useJsonFetch';

export const LoadingComponent = () => {
    const { data, loading, error } = useJsonFetch(import.meta.env.VITE_LOADING_URL, []);
    return (
        <div>
            <h3>Индикатор загрузки</h3>
            {loading ? <p>Loading...</p> : <p>{data.status}</p>}
            {error && <p>{error}</p>}
        </div>
    );
}
