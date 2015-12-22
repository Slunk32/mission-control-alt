export default ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {

  $http.get('/api/pipelines/' + $stateParams.id).then(response => {
    $scope.pipeline = response.data.data

    $http.get('/api/projects/' + response.data.data.project_id).then(response => {
      $scope.project = response.data.data
    })

  })

  $http.get('api/pipelines/' + $stateParams.id + '/stages').then(response => {
    $scope.stages = response.data.data

    setTimeout(function() {
      $(function() {
        $('.pipeline-stage a.configure').on('click', function() {
          console.log('clicked')
          $(this).parent().parent().find('.panel-body').slideToggle(200)
        })
      })

    }, 1)
  })

}]