
import ClassItem from './ClassItem'

export default function List({results}) {
    console.log(results)
    const resultsClasses = results ? results : [];
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        {resultsClasses.map(item => (
                            <div className="col-md-4" key={item.idClase}>
                                <ClassItem career={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}