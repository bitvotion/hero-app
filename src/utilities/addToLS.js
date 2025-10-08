const getInstalledApps = () => {

    const installedAppsSTR = localStorage.getItem("installed")

    return (installedAppsSTR ? JSON.parse(installedAppsSTR) : []);
}

const installIntoLS = (id) => {
    const installedApps = getInstalledApps();

    if (!installedApps.includes(id)) {

        installedApps.push(id);

        localStorage.setItem("installed", JSON.stringify(installedApps))
        return true;
    }
    else {
        alert("App already installed in your device")
        return false;
    }
}

const uninstallApp = (appId) => {

    const installedApp = getInstalledApps()

    try {
        const updateInstalledApps = installedApp.filter(id => id !== appId)
        localStorage.setItem("installed", JSON.stringify(updateInstalledApps))
    } catch (err) {
        console.log(err)
    }

 
}

export { getInstalledApps, installIntoLS, uninstallApp }