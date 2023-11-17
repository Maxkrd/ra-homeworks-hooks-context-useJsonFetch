import { useJsonFetch } from '../../hooks/useJsonFetch';

export const ErrorComponent = () => {
    const { data, loading, error } = useJsonFetch(import.meta.env.VITE_ERROR_URL, []);
    return (
        <div>
            <h3>Получение 500 ошибки</h3>
            {loading ? <p>Loading...</p> : <p>{data.status}</p>}
            {error && <p>{error}</p>}
        </div>
    );
}
