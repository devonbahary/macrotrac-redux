import React from 'react';

const UserMacrosGraph = ({ user }) => (
    <div className="UserMacrosGraph">
        <div className="UserMacrosGraph__container">
            <div className="UserMacrosGraph__containerMarkerOverlay">
                <div className="UserMacrosGraph__containerMarkerOverlayMarker"></div>
                <div className="UserMacrosGraph__containerMarkerOverlayMarker"></div>
                <div className="UserMacrosGraph__containerMarkerOverlayMarker"></div>
                <div className="UserMacrosGraph__containerMarkerOverlayMarker"></div>
                <div className="UserMacrosGraph__containerMarkerOverlayMarker"></div>
                <div className="UserMacrosGraph__containerMarkerOverlayMarker"></div>
                <div className="UserMacrosGraph__containerMarkerOverlayMarker"></div>
                <div className="UserMacrosGraph__containerMarkerOverlayMarker"></div>
                <div className="UserMacrosGraph__containerMarkerOverlayMarker"></div>
                <div className="UserMacrosGraph__containerMarkerOverlayMarker"></div>
            </div>
            <div className="UserMacrosGraph__containerColumn--carbs">
                <div className="UserMacrosGraph__containerColumnLabel">
                    Carbs
                </div>
                <div className="UserMacrosGraph__containerColumnBg--carbs">
                    <div className="UserMacrosGraph__containerColumnFill--carbs" style={{height: `${user.carbsRatioGoal}%`}}>
                    </div>
                    <div className="UserMacroGraph__containerColumnRatio" style={{bottom: `${Math.min(90, user.carbsRatioGoal)}%`}}>
                      {user.carbsRatioGoal}%
                    </div>
                </div>
            </div>
            <div className="UserMacrosGraph__containerColumn--prot">
                <div className="UserMacrosGraph__containerColumnLabel">
                  Prot
                </div>
                <div className="UserMacrosGraph__containerColumnBg--prot">
                    <div className="UserMacrosGraph__containerColumnFill--prot" style={{height: `${user.protRatioGoal}%`}}>
                    </div>
                    <div className="UserMacroGraph__containerColumnRatio" style={{bottom: `${Math.min(90, user.protRatioGoal)}%`}}>
                      {user.protRatioGoal}%
                    </div>
                </div>
            </div>
            <div className="UserMacrosGraph__containerColumn--fat">
                <div className="UserMacrosGraph__containerColumnLabel">
                    Fat
                </div>
                <div className="UserMacrosGraph__containerColumnBg--fat">
                    <div className="UserMacrosGraph__containerColumnFill--fat" style={{height: `${user.fatRatioGoal}%`}}>
                    </div>
                    <div className="UserMacroGraph__containerColumnRatio" style={{bottom: `${Math.min(90, user.fatRatioGoal)}%`}}>
                      {user.fatRatioGoal}%
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default UserMacrosGraph;
