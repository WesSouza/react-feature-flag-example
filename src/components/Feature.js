import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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

const withSystemFeatures = graphql(gql`query {
  systemFeatures
}`);

export default withSystemFeatures(Feature);
