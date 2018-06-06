// @flow
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import type { Dispatch } from 'redux';
import {
  observationCreate,
  observationUpdate
} from '../../../ducks/observations';
import { observationSource } from '../../../ducks/observationSource';
import type { StoreState } from '../../../types/redux';
import CameraView from './CameraView';
import type { Props, StateProps, DispatchProps } from './CameraView';
import { drawerClose, drawerOpen } from '../../../ducks/drawers';

function mapStateToProps(state: StoreState, ownProps: Props): StateProps {
  return {
    observations: state.app.observations,
    selectedObservation: state.app.selectedObservation,
    showSavedModal: state.app.modals.saved,
    fromEditor:
      ownProps.navigation &&
      ownProps.navigation.state &&
      ownProps.navigation.state.params &&
      ownProps.navigation.state.params.source === 'editor'
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    createObservation: observation => dispatch(observationCreate(observation)),
    updateObservation: observation => dispatch(observationUpdate(observation)),
    goToObservationEditor: () =>
      dispatch(NavigationActions.navigate({ routeName: 'ObservationEditor' })),
    goToCategories: () =>
      dispatch(NavigationActions.navigate({ routeName: 'Categories' })),
    onDrawerClose: () => dispatch(drawerClose('observations')),
    goToMapView: () =>
      dispatch(NavigationActions.navigate({ routeName: 'MapView' })),
    onDrawerOpen: () => dispatch(drawerOpen('observations')),
    updateObservationSource: () => dispatch(observationSource('camera'))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraView);
