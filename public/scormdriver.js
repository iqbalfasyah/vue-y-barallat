var SCORM = {
    version: "1.2",
    api: null,
    apiInitialized: false,
    
    findAPI: function() {
        var api = window.parent;
        while (api && (api.GetValue == null && api.LMSInitialize == null)) {
            api = api.parent;
        }
        return api;
    },
    
    init: function() {
        this.api = this.findAPI();
        if (this.api != null) {
            this.api.LMSInitialize("");
            this.apiInitialized = true;
        }
    },
    
    finish: function() {
        if (this.apiInitialized) {
            this.api.LMSFinish("");
            this.apiInitialized = false;
        }
    },
    
    setValue: function(key, value) {
        if (this.apiInitialized) {
            this.api.SetValue(key, value);
        }
    },
    
    getValue: function(key) {
        if (this.apiInitialized) {
            return this.api.GetValue(key);
        }
        return null;
    }
};

// Initialize SCORM API when the page loads
window.onload = function() {
    SCORM.init();
};

// Call finish when the window is closed
window.onbeforeunload = function() {
    SCORM.finish();
};
