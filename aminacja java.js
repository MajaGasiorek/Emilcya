<script>
document.getElementById('kiss').addEventListener('click', function() {
  this.classList.add('shake');
  setTimeout(() => this.classList.remove('shake'), 500);
});

document.getElementById('kiss2').addEventListener('click', function() {
  this.classList.add('shake');
  setTimeout(() => this.classList.remove('shake'), 500);
});
</script>