import { matches } from 'constants/Breakpoints';

const getCurrentBreakpoint = () => {
  const match = matches.find(match => window.matchMedia(match.mediaQuery).matches);
  if (!match) {
    return undefined;
  }

  return match.breakpoint;
};

class BreakpointObserver {
  constructor() {
    this.subs = {};
    this.currentBreakpoint = getCurrentBreakpoint();
    this.running = false;

    window.addEventListener('resize', () => this.handleResize());
  }

  handleResize() {
    if (this.running) {
      return;
    }

    this.running = true;
    requestAnimationFrame(() => {
      this.currentBreakpoint = getCurrentBreakpoint();
      this.publish();
      this.running = false;
    });
  }

  getCurrentBreakpoint() {
    return this.currentBreakpoint;
  }

  publish() {
    const payload = this.currentBreakpoint;

    Object.keys(this.subs)
      .forEach(key => this.subs[key](payload));
  }

  subscribe(key, fn) {
    this.subs[key] = fn;
  }

  unsubscribe(key) {
    delete this.subs[key];
  }
}

let breakpointObserverInstance = undefined;

const getSharedInstance = () => {
  if (!breakpointObserverInstance) {
    breakpointObserverInstance = new BreakpointObserver();
  }

  return breakpointObserverInstance;
}

export default {
  getSharedInstance,
};
