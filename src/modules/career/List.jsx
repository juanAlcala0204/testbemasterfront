
import CareerItem from './CareerItem'

export default function List({results}) {
    console.log(results)
    const resultsCareers = results ? results : [];
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        {resultsCareers.map(item => (
                            <div className="col-md-4" key={item.idCarrera}>
                                <CareerItem career={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}