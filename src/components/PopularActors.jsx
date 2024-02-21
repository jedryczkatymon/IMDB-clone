import GetActorList from "../API/GetActorList";

const PopularActors = () => {
    return (
        <GetActorList
            url="https://api.themoviedb.org/3/trending/person/day?language=en-US"
            categoryTitle="Popular actors"
            categorySubtitle="People famous for their acting"
        />
    );
}
export default PopularActors;