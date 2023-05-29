const Dashboard = class Dashboard {
  renderBlock(title, stats) {
    return `
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">${title}</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">${stats}</div>
              </div>
              <div class="col-auto">
                  <i class="fas fa-user-circle fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  render(datas) {
    return `
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Tableau de bord</h1>
      </div>
      <div class="row">
        ${datas.map((stats) => this.renderBlock(stats.title, stats.stats)).join('')}
      </div>
    `;
  }
};

export default Dashboard;
