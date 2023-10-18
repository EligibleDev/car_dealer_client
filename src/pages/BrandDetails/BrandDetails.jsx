import { useLoaderData } from 'react-router-dom';

const BrandDetails = () => {
      const brands = useLoaderData();

      return (
            <div>
                  brand details: {brands.length}
            </div>
      );
};

export default BrandDetails;