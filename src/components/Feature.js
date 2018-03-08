import { graphql } from 'react-apollo';

import systemFeaturesQuery from 'graphql/queries/systemFeatures.gql';

const Feature = ({
  children,
  data,
  feature,
  renderWhenDisabled,
  renderWhenEnabled,
  renderWhenError,
  renderWhenLoading,
}) => {
  const {
    error,
    loading,
    systemFeatures,
  } = data;

  if (error) {
    return renderWhenError || renderWhenDisabled || null;
  }

  if (loading) {
    return renderWhenLoading || null;
  }

  if (!systemFeatures.includes(feature)) {
    return renderWhenDisabled || null;
  }

  return renderWhenEnabled || children || null;
}

const withSystemFeatures = graphql(systemFeaturesQuery);

export default withSystemFeatures(Feature);
