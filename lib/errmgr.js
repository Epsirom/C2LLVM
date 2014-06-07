/**
 * Created by Epsirom on 14-6-7.
 */

module.exports = ErrMgr;

function ErrMgr() {
    if(!(this instanceof ErrMgr)){
        return new ErrMgr();
    }else{
        this.errors = [];
    }
}

ErrMgr.prototype.append = function(newerr) {
    this.errors.push(newerr);
};

ErrMgr.prototype.reset = function() {
    this.errors = [];
};
