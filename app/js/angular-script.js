
// Application module
var crudApp = angular.module('crudApp', []);
crudApp.controller("DbController", ['$scope', '$http', function ($scope, $http) {
    function getInfo() {
        $http.post('databaseFiles/empDetails.php').success(function (data) {
            // Stored the returned data into scope
            $scope.details = data;
        });
    }
    // Function to get employee details from the database
    getInfo();

    $scope.insertInfo = function (info) {
      $http.post('databaseFiles/insertDetails.php',
                 {"name":info.name, "email":info.email, "address":info.address, "gender":info.gender}).success (
        function (data) {
          if (data == true) {
            getInfo();
            $('#empForm').css('display', 'none');
          }
      });
    };
  
    $scope.insertMsg = function(name){
      $.notify('Employee '+name+' inserted!',{type:'success',delay:'100',mouse_over:'pause'});
    }
  
    $scope.currentUser = {};
  
    $scope.editInfo = function(info){
      $scope.currentUser = info;
      $('#empForm').slideUp();
      $('#editForm').slideToggle();
    };
    
    $scope.UpdateInfo = function(info){
      $http.post('databaseFiles/updateDetails.php',
                 {"id":info.emp_id,"name":info.emp_name,"email":info.emp_email,"address":info.emp_address,"gender":info.emp_gender}).success(
        function(data){
          $scope.show_form = true;
          if (data == true) {
            getInfo();
          }
      });
    };
  
    $scope.formToggle = function(){
      $('#empForm input[name=emp_name]').val('');
      $('#empForm input[name=emp_email]').val('');
      $('#empForm input[name=emp_gender]').prop('checked',false);
      $('#empForm input[name=emp_address]').val('');
      $('#empForm').toggle();
    };
  
    $scope.updateMsg = function(empId){
      $('#editForm').slideToggle();
      $.notify('Employee '+empId+' updated!',{type:'success',delay:'100',mouse_over:'pause'});
    };
  
    $scope.deleteInfo = function(){
      emp_id = $("#delModal input[name=empid]").val();
      $http.post('databaseFiles/deleteDetails.php',{"del_id":emp_id}).success(function(data){
        if (data == true) {
          getInfo();
        }
      });
      $.notify('Employee '+emp_id+' deleted!',{type:'warning',delay:'100',mouse_over:'pause'});
    };
  
    $scope.confirmDelete = function(detail){
      $("#delModal input[name=empid]").val(detail.emp_id);
      $("#delModal").modal("show");
    }

}]);