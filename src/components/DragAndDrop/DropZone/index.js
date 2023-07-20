import React from 'react';
import {View} from 'react-native';
import {Portal} from '@gorhom/portal';
import PropTypes from 'prop-types';
import stylePropTypes from '../../../styles/stylePropTypes';

const propTypes = {
    /** Name for a drop zone view holder which gives us the flexibility to mount drop zone wherever we want. The holder view can be implemented as PortalHost */
    dropZoneViewHolderName: PropTypes.string.isRequired,

    /** Drop zone content */
    children: PropTypes.node.isRequired,

    /** Required for drag and drop to properly detect dropzone */
    dropZoneId: PropTypes.string.isRequired,

    /** Style for the holder view of the dropzone */
    dropZoneViewHolderStyle: stylePropTypes,

    /** Style for the view of the dropzone */
    dropZoneViewStyle: stylePropTypes,
};

const defaultProps = {
    dropZoneViewHolderStyle: [],
    dropZoneViewStyle: {},
};

function DropZone(props) {
    return (
        <Portal hostName={props.dropZoneViewHolderName}>
            <View style={props.dropZoneViewHolderStyle}>{props.children}</View>
            {/* Necessary for blocking events on content which can publish unwanted dragleave even if we are inside dropzone  */}
            <View
                nativeID={props.dropZoneId}
                style={props.dropZoneViewStyle}
            />
        </Portal>
    );
}

DropZone.displayName = 'DropZone';
DropZone.propTypes = propTypes;
DropZone.defaultProps = defaultProps;

export default DropZone;
